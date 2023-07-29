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
  border: none;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }
`
