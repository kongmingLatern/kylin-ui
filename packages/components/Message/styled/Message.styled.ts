import { keyframes, styled } from 'styled-components'
import { MessageType } from '../type'

export const MessageContainer = styled.div`
  position: fixed;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`
const rotate = keyframes`
    from {
      transform: translateY(-100%);
      opacity: 0;
    }

    10% {
      transform: translateY(0%);
      opacity: 1;
    }

    40% {
      transform: translateY(0%);
      opacity: 1;
    }

    70% {
      transform: translateY(-100%);
      opacity: 0;
    }

    to {
      transform: translateY(-100%);
      opacity: 0;
    }
`
export const MessageListContainer = styled.div<{
  type?: MessageType
  duration: number
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

  animation: ${rotate}
    ${({ duration }) => duration / 1000 + 2}s ease-in-out;
  -moz-animation: ${({ duration }) =>
      duration / 1000 + 2000}s
    ease-in-out ${rotate}; /* Firefox */
  -webkit-animation: ${rotate}
    ${({ duration }) => duration / 1000 + 2}s ease-in-out; /* Safari 和 Chrome */
  -o-animation: ${({ duration }) => duration / 1000 + 2}s
    ease-in-out ${rotate}; /* Opera */

  color: ${({ type }) => {
    switch (type) {
      case MessageType.success:
        return '#000'
      case MessageType.error:
        return '#ff4d4f'
      case MessageType.warn:
        return '#382800'
      case MessageType.info:
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
