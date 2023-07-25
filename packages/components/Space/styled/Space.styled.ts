import { styled } from 'styled-components'
import { SpaceProps } from '../type'
import {
  formatBy,
  getFlexDirection,
} from '@packages/styled-system'

export const SpaceContainer = styled.div<{
  justify?: SpaceProps['justify']
  direction?: SpaceProps['direction']
  align?: SpaceProps['align']
}>`
  display: flex;
  justify-content: ${({ justify }) => formatBy(justify)};
  align-items: ${({ align }) => formatBy(align)};
  flex-direction: ${({ direction }) =>
    getFlexDirection(direction)};
`

export const SpaceSplit = styled.span`
  border-right: 1px solid var(--border-color);
  margin-right: 1rem;
`
