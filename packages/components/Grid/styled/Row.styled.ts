import { styled } from 'styled-components'
import { RowProps } from '../type'
import { formatBy, getWrap } from '@packages/styled-system'

export const RowContainer = styled.div<{
  justify?: RowProps['justify']
  align?: RowProps['align']
  wrap?: RowProps['wrap']
}>`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;

  justify-content: ${({ justify }) => formatBy(justify)};
  align-items: ${({ align }) => formatBy(align)};
  flex-wrap: ${({ wrap }) => getWrap(wrap)};
`
