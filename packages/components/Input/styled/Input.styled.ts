import { styled } from 'styled-components'
import { InputProps } from '../type'
import { getRadius } from '@packages/styled-system'

export const InputContainer = styled.div<{
  shape?: InputProps['shape']
}>`
  display: inline-flex;
  justify-content: start;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0.4rem 0.4rem;
  border: 1px solid #d9d9d9;
  transition: all 0.25s;
  border-radius: ${({ shape }) => getRadius(shape)};
  outline: none;
  &:focus-within,
  &:hover {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`

export const InputComponent = styled.input<{
  width?: InputProps['width']
  size?: InputProps['size']
  shape?: InputProps['shape']
  show?: number
}>`
  box-sizing: border-box;
  display: inline-block;
  width: ${({ width }) => handleSuffix(width) || '100%'};
  height: ${({ height }) => handleSuffix(height) || 'auto'};
  border: none;
  transition: all 0.3s;
  outline: none;

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
