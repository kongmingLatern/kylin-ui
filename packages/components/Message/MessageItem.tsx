import styles from './style/message.module.css'
import classNames from 'classnames'
import { MessageListProps, MessageType } from './type'
import { CheckCircle, Info, XOctagon } from '@packages/icon'
import {
  MessageIconContainer,
  MessageListContainer,
} from './styled'

export function MessageItem({
  onRemove,
  id,
  type,
  content,
}: MessageListProps) {
  function showIcon() {
    switch (type) {
      case MessageType.Success:
        return (
          <CheckCircle
            color="#52c41a"
            width={16}
            height={16}
          />
        )
      case MessageType.Error:
        return (
          <XOctagon
            color="#ff4d4f"
            width={16}
            height={16}
          />
        )
      case MessageType.Warn:
        return (
          <Info color="#faad14" width={16} height={16} />
        )
      case MessageType.Info:
        return (
          <Info color="#1677ff" width={16} height={16} />
        )
    }
  }
  setTimeout(() => {
    onRemove?.(id)
  }, 3000)

  return (
    <MessageListContainer
      type={type}
      className={classNames(styles.move)}
    >
      <span style={{ display: 'flex' }}>
        <MessageIconContainer>
          {showIcon()}
        </MessageIconContainer>
        {content}
      </span>
    </MessageListContainer>
  )
}
