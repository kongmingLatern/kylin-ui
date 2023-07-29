import { styled } from 'styled-components'
import { InputNumberProps } from '../type'
import { getRadius } from '@packages/styled-system'

export const InputNumberComponent = styled.input<{
  width?: InputNumberProps['width']
  height?: InputNumberProps['height']
  size?: InputNumberProps['size']
}>`
  position: relative;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  padding: 0.4rem 0.4rem;
  border: 1px solid #d9d9d9;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }
`

export const InputNumberContainer = styled.div<{
  shape?: InputNumberProps['shape']
}>`
  display: inline-flex;
  align-items: center;
  justify-content: start;
  position: relative;
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
