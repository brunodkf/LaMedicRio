import { NextRequest, NextResponse } from 'next/server'
import { openai, SYSTEM_PROMPT, CHAT_MODEL } from '@/lib/openai'
import { prisma } from '@/lib/prisma'
import { checkRateLimit } from '@/lib/rate-limit'
import type { MessageRole } from '@/types/chat'

export const dynamic = 'force-dynamic'

interface RequestBody {
  messages: Array<{ role: MessageRole; content: string }>
  sessionId: string
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'anonymous'
  const { allowed } = checkRateLimit(ip)

  if (!allowed) {
    return NextResponse.json(
      { error: 'Muitas mensagens. Aguarde um momento.' },
      { status: 429 }
    )
  }

  let body: RequestBody
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Requisição inválida.' }, { status: 400 })
  }

  const { messages, sessionId } = body

  if (!sessionId || !Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: 'Dados obrigatórios ausentes.' }, { status: 400 })
  }

  const lastMessage = messages[messages.length - 1]
  if (!lastMessage || lastMessage.role !== 'user' || !lastMessage.content?.trim()) {
    return NextResponse.json({ error: 'Mensagem inválida.' }, { status: 400 })
  }

  if (lastMessage.content.length > 1000) {
    return NextResponse.json({ error: 'Mensagem muito longa (máx. 1000 caracteres).' }, { status: 400 })
  }

  // Upsert session and save user message
  try {
    await prisma.chatSession.upsert({
      where: { sessionId },
      update: { updatedAt: new Date() },
      create: { sessionId },
    })

    await prisma.message.create({
      data: {
        sessionId,
        role: 'user',
        content: lastMessage.content,
      },
    })
  } catch (dbErr) {
    console.warn('[chat] DB save (user msg) failed:', dbErr)
  }

  // Filter out error placeholder messages injected by the frontend on failures
  const cleanHistory = messages.slice(-10).filter(
    (m) => m.role === 'user' || (m.role === 'assistant' && m.content.trim() !== '')
  )

  const chatMessages = [
    { role: 'system' as const, content: SYSTEM_PROMPT },
    ...cleanHistory.map((m) => ({
      role: m.role as 'user' | 'assistant',
      content: m.content,
    })),
  ]

  const encoder = new TextEncoder()
  let fullContent = ''

  console.log(`[chat] → OpenAI request | model=${CHAT_MODEL} msgs=${chatMessages.length} session=${sessionId.slice(0, 8)}`)

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const openaiStream = await openai.chat.completions.create({
          model: CHAT_MODEL,
          messages: chatMessages,
          stream: true,
          max_tokens: 500,
          temperature: 0.7,
        })

        for await (const chunk of openaiStream) {
          const content = chunk.choices[0]?.delta?.content ?? ''
          if (content) {
            fullContent += content
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ content })}\n\n`)
            )
          }
        }

        // Save assistant response to DB
        if (fullContent) {
          try {
            await prisma.message.create({
              data: { sessionId, role: 'assistant', content: fullContent },
            })
          } catch (dbErr) {
            console.warn('[chat] DB save (assistant msg) failed:', dbErr)
          }
        }

        controller.enqueue(encoder.encode('data: [DONE]\n\n'))
        console.log(`[chat] ✓ stream complete | chars=${fullContent.length}`)
      } catch (error) {
        console.error('[chat] ✗ OpenAI stream error:', error)
        const message = error instanceof Error ? error.message : 'Erro interno'
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ error: message })}\n\n`)
        )
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  })
}
