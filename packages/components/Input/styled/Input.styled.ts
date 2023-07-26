import { css, styled } from 'styled-components'
import { InputProps } from '../type'
import {
  getWidthSize,
  getPaddingSize,
  getRadius,
} from '@packages/styled-system'

export const InputContainer = styled.input<{
  size?: InputProps['size']
  shape?: InputProps['shape']
}>`
  display: inline-block;
  border: 1px solid #d9d9d9;
  width: auto;
  outline: none;
  padding: ${({ size }) => getPaddingSize(size)};
  width: ${({ size }) => size && getWidthSize(size)};
  border-radius: ${({ shape }) => getRadius(shape)};
  transition: all 0.3s;

  &:focus {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
  &::placeholder {
    color: #d9d9d9;
  }
`
