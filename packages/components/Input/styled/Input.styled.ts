import { styled } from 'styled-components'
import { InputProps } from '../type'
import { getRadius } from '@packages/styled-system'

export const InputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0.6rem 0.4rem;
  border: 1px solid #d9d9d9;
  outline: none;
  &:focus-within {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`

export const InputComponent = styled.input<{
  width?: InputProps['width']
  size?: InputProps['size']
  shape?: InputProps['shape']
}>`
  display: inline-block;
  width: ${({ width }) => handleSuffix(width) || '100%'};
  height: ${({ height }) => handleSuffix(height) || 'auto'};
  border: none;
  border-radius: ${({ shape }) => getRadius(shape)};
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

export const Suffix = styled.div`
  display: inline-flex;
  margin-left: 0.2rem;
`

function handleSuffix(number: InputProps['width']) {
  if (typeof number === 'number') {
    return `${number}px`
  }
  return number
}
