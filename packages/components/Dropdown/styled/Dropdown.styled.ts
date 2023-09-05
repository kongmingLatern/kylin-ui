import { styled } from 'styled-components'
import { DropdownProps } from './type'

export const DropdownContainer = styled.div``

export const MenuItemContainer = styled.li`
  transition: all 0.2s;
  padding: 0 16px;
  list-style: none;
  display: flex;
  align-items: center;
  z-index: 10;
  &:hover {
    background-color: #f89301;
  }
`

export const MenuContainer = styled.ul`
  position: absolute;
  right: 0;
  bottom: -30;
  opacity: 1;
  transition: all 0.5s;
  margin: 0;
  padding: 0;
  background-color: #fff;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.2);
`
