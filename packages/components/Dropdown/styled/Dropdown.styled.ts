import { styled } from 'styled-components'
import { DropdownProps } from './type'

export const DropdownContainer = styled.div``

export const MenuItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MenuContainer = styled.div<{
  mouseOver?: boolean
}>`
  position: absolute;
  right: 0;
  bottom: -30;
  opacity: ${({ mouseOver }) => (mouseOver ? 1 : 0)};
  transition: all 0.5s;
`
