'use client'

import { useEffect, useRef } from 'react'
import { X, Minus, Trash2 } from 'lucide-react'
import { useChatStore } from '@/store/chatStore'
import { useChat } from '@/hooks/useChat'
import { MessageBubble } from './MessageBubble'
import { TypingIndicator } from './TypingIndicator'
import { ChatInput } from './ChatInput'

const WELCOME_TEXT =
  'Olá! 👋 Sou o assistente virtual da **LA Médic Rio**. Posso ajudar com informações sobre nossos produtos médicos cirúrgicos, especialidades atendidas e contato comercial. Como posso ajudar?'

function renderWelcome(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) =>
    part.startsWith('**') ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  )
}

export function ChatWindow() {
  const { setOpen, setMinimized, clearHistory } = useChatStore()
  const { messages, isLoading, sendMessage, cancelStream } = useChat()

  const bottomRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const hasMessages = messages.length > 0

  return (
    <div className="flex h-[600px] w-[380px] max-h-[calc(100dvh-7rem)] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-900 shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-zinc-700/50 bg-zinc-900 px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-700 text-sm font-bold text-white shrink-0">
          LA
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-zinc-100">
            LA Médic Rio
          </p>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] text-zinc-400">Online agora</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {hasMessages && (
            <button
              onClick={clearHistory}
              title="Limpar histórico"
              className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 transition-colors"
              aria-label="Limpar histórico"
            >
              <Trash2 size={14} />
            </button>
          )}
          <button
            onClick={() => setMinimized(true)}
            className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 transition-colors"
            aria-label="Minimizar chat"
          >
            <Minus size={14} />
          </button>
          <button
            onClick={() => setOpen(false)}
            className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 transition-colors"
            aria-label="Fechar chat"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={listRef}
        className="flex flex-1 flex-col overflow-y-auto py-4 scroll-smooth"
      >
        {/* Welcome message */}
        <div className="flex items-end gap-2 px-4 py-1">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-bold text-white">
            LA
          </div>
          <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-zinc-800 px-4 py-2.5 text-sm leading-relaxed text-zinc-100">
            {renderWelcome(WELCOME_TEXT)}
          </div>
        </div>

        {/* Chat messages */}
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {/* Typing indicator — show only when loading and last msg is NOT already streaming */}
        {isLoading &&
          !messages.some((m) => m.isStreaming && m.content === '') && (
            <TypingIndicator />
          )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <ChatInput
        onSend={sendMessage}
        onCancel={cancelStream}
        isLoading={isLoading}
      />
    </div>
  )
}
