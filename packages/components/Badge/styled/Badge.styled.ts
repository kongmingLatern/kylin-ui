import {
  getAddSuffixOffset,
  getBackground,
  getRadius,
  getPaddingSize,
} from '@packages/styled-system'
import { styled } from 'styled-components'
import { BadgeProps } from '../type'

export const BadgeContainer = styled.span<{
  type?: BadgeProps['type']
  gradient?: BadgeProps['gradient']
  size?: BadgeProps['size']
  shape?: BadgeProps['shape']
  background?: BadgeProps['background'] | null
  color?: BadgeProps['color']
}>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2px;
  white-space: nowrap;
  color: ${({ color }) => color ?? '#000'};
  padding: ${({ size }) => getPaddingSize(size)};
  border-radius: ${({ shape }) => getRadius(shape)};
  background: ${({ type, gradient, background }) =>
    getBackground({ type, gradient, background })};
`

export const BadgeInner = styled.span`
  position: relative;
  display: inline-flex;
`

export const SupContainer = styled.sup<{
  offset?: BadgeProps['offset']
  background?: BadgeProps['background']
  color?: BadgeProps['color']
  size?: BadgeProps['size']
  shape?: BadgeProps['shape']
}>`
  position: absolute;
  top: ${({ offset }) =>
    getAddSuffixOffset(offset?.[0] ?? '-1rem')};
  right: ${({ offset }) =>
    getAddSuffixOffset(offset?.[1] ?? '-1.5rem')};
  z-index: 100;
  color: ${({ color }) => color ?? '#fff'};
  background: ${({ background }) =>
    getBackground({ background })};
  padding: ${({ size }) => getPaddingSize(size)};

  border-radius: ${({ shape }) => getRadius(shape)};
`
