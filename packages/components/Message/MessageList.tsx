import { useState } from 'react'
import {
  Message,
  MessageListProps,
  MessageType,
} from './type'
import { MessageItem } from './MessageItem'
import ReactDOM from 'react-dom/client'
import { MessageContainer } from './styled'

function initMessageDOM() {
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

  registerMessage(flagId, setFlagId)

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
            duration={item.duration}
            onRemove={removeById}
          />
        )
      })}
    </MessageContainer>
  )
}

initMessageDOM()
export { MessageList, message }

function registerMessage(flagId, setFlagId) {
  function createMessageInstance(type, content, duration?) {
    const id = `${++incrementId}`
    messageList[id] = {
      id,
      type,
      content,
      duration,
    }
    setFlagId(flagId + 1)
    return messageList
  }
  const _message = (type, content, duration?) =>
    createMessageInstance(type, content, duration)

  for (const key in MessageType) {
    message[key] = (content, duration?: number) => {
      _message(MessageType[key], content, duration)
    }
  }
}
