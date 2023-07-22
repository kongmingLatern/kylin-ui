import { styled } from 'styled-components'
import { ColProps } from '../type'

export const ColContainer = styled.div<{
  flex: ColProps['flex']
}>`
  flex: ${({ flex }) => flex};
`
