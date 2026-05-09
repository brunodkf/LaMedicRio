'use client'

import { useState, useRef, useCallback, type KeyboardEvent, type ChangeEvent } from 'react'
import { Send, Square } from 'lucide-react'

const MAX_CHARS = 1000

interface ChatInputProps {
  onSend: (content: string) => void
  onCancel: () => void
  isLoading: boolean
}

export function ChatInput({ onSend, onCancel, isLoading }: ChatInputProps) {
  const [value, setValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const adjustHeight = useCallback(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`
  }, [])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (e.target.value.length <= MAX_CHARS) {
        setValue(e.target.value)
        adjustHeight()
      }
    },
    [adjustHeight]
  )

  const handleSubmit = useCallback(() => {
    if (!value.trim() || isLoading) return
    onSend(value)
    setValue('')
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }, [value, isLoading, onSend])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSubmit()
      }
    },
    [handleSubmit]
  )

  const remaining = MAX_CHARS - value.length
  const nearLimit = remaining <= 100

  return (
    <div className="border-t border-zinc-700/50 bg-zinc-900 p-3">
      <div className="flex items-end gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 focus-within:border-red-700/60 transition-colors">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem…"
          rows={1}
          disabled={isLoading && !value}
          className="flex-1 resize-none bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none disabled:opacity-50 max-h-[120px]"
          aria-label="Campo de mensagem"
        />
        <button
          onClick={isLoading ? onCancel : handleSubmit}
          aria-label={isLoading ? 'Cancelar resposta' : 'Enviar mensagem'}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all ${
            isLoading
              ? 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
              : value.trim()
              ? 'bg-red-700 text-white hover:bg-red-600 active:scale-95'
              : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'
          }`}
        >
          {isLoading ? <Square size={14} /> : <Send size={14} />}
        </button>
      </div>

      <div className="mt-1.5 flex items-center justify-between px-1">
        <span className="text-[10px] text-zinc-600">
          Enter para enviar · Shift+Enter nova linha
        </span>
        {nearLimit && (
          <span className={`text-[10px] ${remaining <= 20 ? 'text-red-400' : 'text-zinc-500'}`}>
            {remaining}
          </span>
        )}
      </div>
    </div>
  )
}
