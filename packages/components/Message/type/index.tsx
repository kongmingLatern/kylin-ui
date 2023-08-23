export * from './MessageProps'
// 消息对象类型
export type Message = {
  success: (message: string, duration?: number) => void
  error: (message: string, duration?: number) => void
  warn: (message: string, duration?: number) => void
  info: (message: string, duration?: number) => void
}

// 消息的类型枚举
export enum MessageType {
  success = 'success',
  error = 'error',
  warn = 'warn',
  info = 'info',
}

// 消息组件参数
export type MessageListProps = {
  id: string
  type: MessageType
  content: string
  duration?: number
  onRemove?: (id: string) => void
}

export type MessageProps = {
  children?: React.ReactNode
}
