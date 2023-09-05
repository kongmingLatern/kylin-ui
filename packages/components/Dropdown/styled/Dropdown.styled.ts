import { styled } from 'styled-components'
import { DropdownProps } from './type'

export const DropdownContainer = styled.div``

export const MenuItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  z-index: 10;
`

export const MenuContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: -30;
  opacity: 1;
  transition: all 0.5s;
`
