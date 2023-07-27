import styled from 'styled-components'

export const ButtonGroupContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  & button {
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`
