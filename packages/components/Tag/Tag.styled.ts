import { styled } from 'styled-components'
import { TagProps } from './type'
import {
  getBackground,
  getSize,
  getRadius,
  getMargin,
} from '@kylin-ui/styled-system'

export const TagContainer = styled.span<{
  type?: TagProps['type']
  size?: TagProps['size']
  shape?: TagProps['shape']
  gradient?: TagProps['gradient']
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  white-space: nowrap;
  background: ${({ type, gradient }) =>
    getBackground({
      gradient: gradient,
      type: type,
    })};
  padding: ${({ size }) => getSize(size)};
  border-radius: ${({ shape }) => getRadius(shape)};
`

export const TagIcon = styled.span<{
  position?: 'before' | 'after'
}>`
  margin: ${({ position }) => getMargin({ position })};
`
