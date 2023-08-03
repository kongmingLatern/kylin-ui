import { styled } from 'styled-components'
import { InputNumberProps } from '../type'
import { handleSuffix } from './Input.styled'

export const InputNumberComponent = styled.input<{
  width?: InputNumberProps['width']
  height?: InputNumberProps['height']
  size?: InputNumberProps['size']
  disabled?: InputNumberProps['disabled']
}>`
  position: relative;
  padding: 0.4rem 0.4rem;
  width: ${({ width }) => handleSuffix(width) || '100%'};
  height: ${({ height }) => handleSuffix(height) || 'auto'};
  border: none;
  outline: none;
  transition: all 0.25s;
  cursor: ${({ disabled }) =>
    disabled ? 'not-allowed' : 'text'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }
`

export const ArrowIcon = styled.div<{
  width?: InputNumberProps['width']
  height?: InputNumberProps['height']
}>`
  width: 22px;
  height: ${({ height }) => handleSuffix(height) || '100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  opacity: 0;
  border-collapse: collapse;
  transition: all 0.25s;

  overflow: hidden;
  &:focus-within,
  &:hover {
    opacity: 1;
    border-color: #40a9ff;
    box-shadow: 0 0 0 1px rgba(24, 144, 255, 0.2);
  }
`
