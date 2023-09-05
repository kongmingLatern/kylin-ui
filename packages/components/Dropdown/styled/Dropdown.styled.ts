import { styled } from 'styled-components'
import { ButtonProps } from '@components/Button'
import {
  getBackground,
  getColor,
} from '@packages/styled-system'

export const DropdownContainer = styled.div``

export const MenuItemContainer = styled.li<{
  type?: ButtonProps['type']
}>`
  transition: all 0.2s;
  padding: 0 16px;
  list-style: none;
  display: flex;
  align-items: center;
  z-index: 10;
  &:hover {
    color: ${({ type }) => getColor({ type })};
    background-color: ${({ type }) =>
      getBackground({ type })};
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
