'use client'

import { useCallback, useRef } from 'react'
import { useChatStore } from '@/store/chatStore'
import type { StreamChunk } from '@/types/chat'

export function useChat() {
  const {
    messages,
    sessionId,
    isLoading,
    error,
    addMessage,
    updateMessage,
    setLoading,
    setError,
    clearHistory,
  } = useChatStore()

  const abortRef = useRef<AbortController | null>(null)

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim()
      if (!trimmed || isLoading) return

      setError(null)
      setLoading(true)

      addMessage({ role: 'user', content: trimmed })

      const assistantMsg = addMessage({
        role: 'assistant',
        content: '',
        isStreaming: true,
      })

      const controller = new AbortController()
      abortRef.current = controller

      const historyForApi = [
        ...messages.map((m) => ({ role: m.role, content: m.content })),
        { role: 'user' as const, content: trimmed },
      ]

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: historyForApi, sessionId }),
          signal: controller.signal,
        })

        if (!response.ok) {
          const data = await response.json().catch(() => ({}))
          throw new Error(data.error ?? `Erro ${response.status}`)
        }

        const reader = response.body?.getReader()
        if (!reader) throw new Error('Stream indisponível.')

        const decoder = new TextDecoder()
        let buffer = ''
        let accumulated = ''

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })

          const lines = buffer.split('\n')
          buffer = lines.pop() ?? ''

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue

            const raw = line.slice(6).trim()
            if (raw === '[DONE]') {
              updateMessage(assistantMsg.id, { isStreaming: false })
              break
            }

            let chunk: StreamChunk
            try {
              chunk = JSON.parse(raw)
            } catch {
              // Malformed SSE line — skip silently
              continue
            }

            if (chunk.error) {
              throw new Error(chunk.error)
            }
            if (chunk.content) {
              accumulated += chunk.content
              updateMessage(assistantMsg.id, { content: accumulated })
            }
          }
        }
      } catch (err) {
        if ((err as Error).name === 'AbortError') return

        const message =
          err instanceof Error ? err.message : 'Erro ao enviar mensagem.'
        console.error('[useChat] sendMessage error:', message, err)
        setError(message)

        const isQuota = message.includes('429') || message.toLowerCase().includes('quota')
        const displayContent = isQuota
          ? 'Serviço temporariamente indisponível. Entre em contato pelo WhatsApp (21) 98545-0123.'
          : 'Desculpe, ocorreu um erro. Tente novamente.'

        updateMessage(assistantMsg.id, {
          content: displayContent,
          isStreaming: false,
        })
      } finally {
        setLoading(false)
        abortRef.current = null
      }
    },
    [messages, sessionId, isLoading, addMessage, updateMessage, setLoading, setError]
  )

  const cancelStream = useCallback(() => {
    abortRef.current?.abort()
  }, [])

  return { messages, isLoading, error, sendMessage, cancelStream, clearHistory }
}
