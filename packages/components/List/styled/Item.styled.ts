import { styled } from 'styled-components'
import { ItemProps } from '../type'

export const ItemContainer = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ItemBox = styled.div`
  display: flex;
  align-items: center;
`

export const ItemMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ItemMainParagraph = styled.main`
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ItemUL = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & li {
    list-style: none;
  }
`
