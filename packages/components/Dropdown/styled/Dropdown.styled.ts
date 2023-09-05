import { styled, css } from 'styled-components'
import { ButtonProps } from '@components/Button'
import {
  getBackground,
  getColor,
  setDisabled,
} from '@packages/styled-system'
import { DropdownProps } from '../type'

export const DropdownContainer = styled.div``

export const MenuItemContainer = styled.li<{
  type?:
    | ButtonProps['type']
    | 'disabled'
    | 'warning'
    | 'danger'

  disabled?: boolean
}>`
  transition: all 0.2s;
  min-height: 30px;
  padding: 0 16px;
  list-style: none;
  display: flex;
  align-items: center;
  z-index: 10;

  ${({ disabled }) =>
    !disabled
      ? css<{
          type?:
            | ButtonProps['type']
            | 'disabled'
            | 'warning'
            | 'danger'
        }>`
          &:hover {
            color: ${({ type }) => getColor({ type })};
            background-color: ${({ type }) =>
              getBackground({ type })};
          }
        `
      : setDisabled()}
`

export const MenuContainer = styled.ul<{
  offset?: DropdownProps['offset']
}>`
  position: absolute;
  right: ${({ offset }) => (offset && offset[0]) || 0};
  bottom: ${({ offset }) => (offset && offset[1]) || -30};
  opacity: 1;
  transition: all 0.5s;
  margin: 0;
  padding: 0;
  background-color: #fff;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.2);
`
