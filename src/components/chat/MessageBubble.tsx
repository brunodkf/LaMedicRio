'use client'

import { motion } from 'framer-motion'
import type { ChatMessage } from '@/types/chat'

interface MessageBubbleProps {
  message: ChatMessage
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user'

  const time = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(message.createdAt))

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex items-end gap-2 px-4 py-1 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Avatar */}
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-bold text-white">
          LA
        </div>
      )}

      <div className={`flex max-w-[75%] flex-col gap-1 ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
            isUser
              ? 'rounded-br-sm bg-red-700 text-white'
              : 'rounded-bl-sm bg-zinc-800 text-zinc-100'
          } ${message.isStreaming ? 'after:ml-0.5 after:inline-block after:h-4 after:w-0.5 after:animate-pulse after:bg-current after:align-middle' : ''}`}
        >
          {message.content || (message.isStreaming ? '' : '…')}
        </div>
        <span className="text-[10px] text-zinc-500">{time}</span>
      </div>
    </motion.div>
  )
}
