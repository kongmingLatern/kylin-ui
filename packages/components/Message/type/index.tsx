export * from './MessageProps'
// 消息对象类型
export type Message = {
  success: (message: string) => void
  error: (message: string) => void
  warn: (message: string) => void
  info: (message: string) => void
}

// 消息的类型枚举
export enum MessageType {
  Success = 'success',
  Error = 'error',
  Warn = 'warn',
  Info = 'info',
}

// 消息组件参数
export type MessageListProps = {
  id: string
  type: MessageType
  content: string
  onRemove?: (id: string) => void
}

export type MessageProps = {
  children?: React.ReactNode
}
