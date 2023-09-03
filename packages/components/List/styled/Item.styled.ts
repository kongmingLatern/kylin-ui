import { styled } from 'styled-components'

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
`

export const ItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ItemUL = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  & li {
    list-style: none;
  }
`

export const ItemContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: start;
`
