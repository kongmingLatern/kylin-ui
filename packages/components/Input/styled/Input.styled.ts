import { styled } from 'styled-components'
import { InputProps } from '../type'
import { getRadius } from '@packages/styled-system'

export const InputContainer = styled.input<{
  width?: InputProps['width']
  size?: InputProps['size']
  shape?: InputProps['shape']
}>`
  display: inline-block;
  padding: 0.6rem 0.4rem;
  width: ${({ width }) => handleSuffix(width) || '100%'};
  height: ${({ height }) => handleSuffix(height) || 'auto'};
  border: 1px solid #d9d9d9;
  border-radius: ${({ shape }) => getRadius(shape)};
  transition: all 0.3s;
  outline: none;

  &:focus {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
  &::placeholder {
    color: #d9d9d9;
  }
`

function handleSuffix(number: InputProps['width']) {
  if (typeof number === 'number') {
    return `${number}px`
  }
  return number
}
