import { useState } from 'react'
import {
  Message,
  MessageListProps,
  MessageType,
} from './type'
import { MessageItem } from './MessageItem'
import ReactDOM from 'react-dom/client'
import { MessageContainer } from './styled'

function init() {
  const messageModelContainer =
    document.createElement('div')
  messageModelContainer.className =
    'message-model-container'
  document.body.appendChild(messageModelContainer)
  ReactDOM.createRoot(
    messageModelContainer as HTMLElement
  ).render(<MessageList></MessageList>)
}

// 消息对象
const message: Message = {} as Message

// 标识消息的ID
let incrementId = 0

// 消息列表对象
const messageList: { [key: string]: MessageListProps } = {}

// 消息列表组件
const MessageList = () => {
  const [flagId, setFlagId] = useState(0)

  const removeById = (id: string) => {
    delete messageList[id]
    setFlagId(flagId + 1)
  }

  const _message = (type: MessageType, content: string) => {
    const id = `${++incrementId}`
    messageList[id] = {
      id: id,
      type: type,
      content: content,
    }
    setFlagId(flagId + 1)
  }

  message.success = (content: string) => {
    _message(MessageType.Success, content)
  }

  message.error = (content: string) => {
    _message(MessageType.Error, content)
  }

  message.warn = (content: string) => {
    _message(MessageType.Warn, content)
  }

  message.info = (content: string) => {
    _message(MessageType.Info, content)
  }

  return (
    <MessageContainer>
      {Object.keys(messageList).map(key => {
        const item = messageList[key]
        return (
          <MessageItem
            key={item.id}
            id={item.id}
            type={item.type}
            content={item.content}
            onRemove={removeById}
          />
        )
      })}
    </MessageContainer>
  )
}

init()
export { MessageList, message }
