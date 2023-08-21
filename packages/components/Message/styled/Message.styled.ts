import { styled } from 'styled-components'
import { MessageType } from '../type'

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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px 2px rgba(0, 0, 0, 0.1);
  will-change: transform;
  z-index: 9999;
  background-color: #fff;
  margin-bottom: 1rem;

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
  padding: 9px 12px;
`

export const MessageIconContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  z-index: 9999;
`
