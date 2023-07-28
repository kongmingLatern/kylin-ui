import { styled } from 'styled-components'
import { InputProps } from '../type'
import { getRadius } from '@packages/styled-system'

export const InputContainer = styled.div<{
  shape?: InputProps['shape']
}>`
  display: inline-flex;
  align-items: center;
  justify-content: start;
  position: relative;
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
  padding-right: ${({ show }) =>
    show ? '3rem' : '0.4rem'};
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

  width: ${({ width }) => handleSuffix(width) || '100%'};
`

export const Suffix = styled.div`
  display: inline-flex;
  margin-left: 0.2rem;
`

export const CountContainer = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.4rem;
  font-size: 0.8rem;
  user-select: none;
  color: #aaa;
`

function handleSuffix(number: InputProps['width']) {
  if (typeof number === 'number') {
    return `${number}px`
  }
  return number
}
