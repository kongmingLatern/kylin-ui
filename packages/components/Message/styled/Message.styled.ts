import { styled } from 'styled-components'
import { MessageProps, MessageType } from '../type'

export const MessageContainer = styled.div`
  position: fixed;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`

export const MessageListContainer = styled.div<{
  type?: MessageType
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  will-change: transform;

  color: ${({ type }) => {
    switch (type) {
      case MessageType.Success:
        return '#000'
      case MessageType.Error:
        return '#ff4d4f'
      case MessageType.Warn:
        return '#382800'
      case MessageType.Info:
        return '#1769aa'
    }
  }};
  padding: 1rem 0.75rem;
`

export const MessageIconContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`
