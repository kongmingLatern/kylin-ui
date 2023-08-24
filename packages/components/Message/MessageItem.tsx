import { MessageListProps, MessageType } from './type'
import { CheckCircle, Info, XOctagon } from '@packages/icon'
import {
  MessageIconContainer,
  MessageListContainer,
} from './styled'
function showIcon(type: MessageType) {
  switch (type) {
    case MessageType.success:
      return (
        <CheckCircle
          color="#52c41a"
          width={16}
          height={16}
        />
      )
    case MessageType.error:
      return (
        <XOctagon color="#ff4d4f" width={16} height={16} />
      )
    case MessageType.warn:
      return <Info color="#faad14" width={16} height={16} />
    case MessageType.info:
      return <Info color="#1677ff" width={16} height={16} />
  }
}
export function MessageItem({
  onRemove,
  id,
  type,
  content,
  duration = 3000,
}: MessageListProps) {
  setTimeout(() => {
    onRemove?.(id)
  }, duration)

  return (
    <MessageListContainer type={type} duration={duration}>
      <span style={{ display: 'flex' }}>
        <MessageIconContainer>
          {showIcon(type)}
        </MessageIconContainer>
        {content}
      </span>
    </MessageListContainer>
  )
}
