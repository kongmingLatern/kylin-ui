import styles from './style/message.module.css'
import classNames from 'classnames'
import { MessageListProps, MessageType } from './type'
import { CheckCircle, Info, XOctagon } from '@packages/icon'

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
  function getColorByType() {
    switch (type) {
      case MessageType.Success:
        return 'text-black'
      case MessageType.Error:
        return 'text-#ff4d4f'
      case MessageType.Warn:
        return 'text-[#382800]'
      case MessageType.Info:
        return 'text-[#1769aa]'
    }
  }

  setTimeout(() => {
    onRemove?.(id)
  }, 3000)

  return (
    <div
      className={classNames(
        'flex',
        'j-a-c',
        'shadow-lg',
        getColorByType(),
        styles.move,
        'transition',
        'px-3',
        'py-4'
      )}
    >
      <span className="flex">
        <span className="mr-2 flex items-center">
          {showIcon()}
        </span>
        {content}
      </span>
    </div>
  )
}
