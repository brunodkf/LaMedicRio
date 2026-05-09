'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { ChatMessage } from '@/types/chat'

interface ChatStore {
  isOpen: boolean
  isMinimized: boolean
  messages: ChatMessage[]
  sessionId: string
  isLoading: boolean
  error: string | null

  setOpen: (open: boolean) => void
  setMinimized: (minimized: boolean) => void
  addMessage: (msg: Omit<ChatMessage, 'id' | 'createdAt'>) => ChatMessage
  updateMessage: (id: string, update: Partial<ChatMessage>) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  clearHistory: () => void
}

function generateId(): string {
  return typeof crypto !== 'undefined'
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2)
}

export const useChatStore = create<ChatStore>()(
  persist(
    (set, get) => ({
      isOpen: false,
      isMinimized: false,
      messages: [],
      sessionId: generateId(),
      isLoading: false,
      error: null,

      setOpen: (open) => set({ isOpen: open, isMinimized: false }),
      setMinimized: (isMinimized) => set({ isMinimized }),

      addMessage: (msg) => {
        const message: ChatMessage = {
          ...msg,
          id: generateId(),
          createdAt: new Date(),
        }
        set((state) => ({ messages: [...state.messages, message] }))
        return message
      },

      updateMessage: (id, update) =>
        set((state) => ({
          messages: state.messages.map((m) =>
            m.id === id ? { ...m, ...update } : m
          ),
        })),

      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),

      clearHistory: () =>
        set({ messages: [], sessionId: generateId(), error: null }),
    }),
    {
      name: 'lamedic-chat',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        messages: state.messages.slice(-50),
        sessionId: state.sessionId,
      }),
    }
  )
)
