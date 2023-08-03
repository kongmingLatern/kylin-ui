import { styled } from 'styled-components'
import { InputProps } from '../type'
import { getRadius } from '@packages/styled-system'

export const InputContainer = styled.div<{
  shape?: InputProps['shape']
  disabled?: InputProps['disabled']
}>`
  display: inline-flex;
  justify-content: start;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: 1px solid #d9d9d9;
  transition: all 0.25s;
  border-radius: ${({ shape }) => getRadius(shape)};
  outline: none;
  &:focus-within,
  &:hover {
    border-color: ${({ disabled }) =>
      disabled ? '#d9d9d9' : '#40a9ff'};
    box-shadow: ${({ disabled }) =>
      disabled
        ? 'none'
        : '0 0 0 1px rgba(24, 144, 255, 0.2)'};
  }
`

export const InputComponent = styled.input<{
  width?: InputProps['width']
  size?: InputProps['size']
  shape?: InputProps['shape']
  disabled?: InputProps['disabled']
  show?: number
}>`
  box-sizing: border-box;
  display: inline-block;
  width: ${({ width }) => handleSuffix(width) || '100%'};
  height: ${({ height }) => handleSuffix(height) || 'auto'};
  padding: 0.4rem 0.4rem;
  border: none;
  transition: all 0.3s;
  outline: none;
  cursor: ${({ disabled }) =>
    disabled ? 'not-allowed' : 'text'};

  &::placeholder {
    color: #d9d9d9;
  }
`

export const Prefix = styled.div`
  display: inline-flex;
  margin-right: 0.2rem;
`

export const RelativeContainer = styled.div<{
  width?: InputProps['width']
}>`
  position: relative;
  align-items: center;
  display: flex;
  width: ${({ width }) => handleSuffix(width) || '100%'};
`

export const Suffix = styled.div`
  display: inline-flex;
  margin-left: 0.2rem;
`

export const CountContainer = styled.label`
  white-space: nowrap;
  font-size: 0.8rem;
  user-select: none;
  color: #aaa;
`

export function handleSuffix(number: InputProps['width']) {
  if (typeof number === 'number') {
    return `${number}px`
  }
  return number
}
