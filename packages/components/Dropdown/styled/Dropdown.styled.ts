import { styled, css } from 'styled-components'
import {
  getBackground,
  getColor,
  setDisabled,
} from '@packages/styled-system'
import { DropdownProps } from '../type'
import { CommonThemeType } from '@components/helpers'

export const DropdownContainer = styled.div``

export const MenuItemContainer = styled.li<{
  type?: CommonThemeType
  disabled?: boolean
}>`
  transition: all 0.2s;
  min-height: 30px;
  padding: 0 16px;
  list-style: none;
  display: flex;
  align-items: center;
  color: #000;
  z-index: 10;

  ${({ disabled }) =>
    !disabled
      ? css<{
          type?: CommonThemeType
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
  offset: DropdownProps['offset']
  position?: DropdownProps['position']
}>`
  position: absolute;
  right: ${({ position, offset }) =>
    helpers(position)?.right || (offset && offset[0])};
  top: ${({ position, offset }) =>
    helpers(position)?.top || (offset && offset[1])};
  opacity: 1;
  transition: all 0.5s;
  margin: 0;
  padding: 0;
  background-color: #fff;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.2);
`

function helpers(position: DropdownProps['position']) {
  switch (position) {
    case 'bottom-left':
      return {
        right: '50%',
        top: '110%',
      }
    case 'bottom-right':
      return {
        right: '-25%',
        top: '110%',
      }
    case 'top-left':
      return {
        right: '50%',
        top: '-110%',
      }
    case 'top-right':
      return {
        right: '-50%',
        top: '-110%',
      }
    default:
      return null
  }
}
