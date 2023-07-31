import { styled } from 'styled-components'
import { InputNumberProps } from '../type'
import { handleSuffix } from './Input.styled'

export const InputNumberComponent = styled.input<{
  width?: InputNumberProps['width']
  height?: InputNumberProps['height']
  size?: InputNumberProps['size']
}>`
  position: relative;
  width: ${({ width }) => handleSuffix(width) || '100%'};
  height: ${({ height }) => handleSuffix(height) || 'auto'};
  border: none;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }
`

export const ArrowIcon = styled.div`
  width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  border-collapse: collapse;
  overflow: hidden;
  &:focus-within,
  &:hover {
    border-color: #40a9ff;
    box-shadow: 0 0 0 1px rgba(24, 144, 255, 0.2);
  }
`
