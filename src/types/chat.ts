export type MessageRole = 'user' | 'assistant'

export interface ChatMessage {
  id: string
  role: MessageRole
  content: string
  createdAt: Date
  isStreaming?: boolean
}

export interface SendMessagePayload {
  messages: Array<{ role: MessageRole; content: string }>
  sessionId: string
}

export interface StreamChunk {
  content?: string
  error?: string
}
