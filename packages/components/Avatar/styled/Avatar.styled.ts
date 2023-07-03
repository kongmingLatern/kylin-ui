import {
  getFontSize,
  getRadius,
  getWidthSize,
} from '@kylin-ui/styled-system'
import { styled } from 'styled-components'

export const AvatarContainer = styled.span<{
  size?: 'small' | 'middle' | 'large' | number
  shape?: 'circle' | 'rounded' | 'square'
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: ${({ size }) => getWidthSize(size)};
  height: ${({ size }) => getWidthSize(size)};
  font-size: ${({ size }) => getFontSize(size)};
  line-height: ${({ size }) => getWidthSize(size)};

  border-radius: ${({ shape }) => getRadius(shape)};

  & > img,
  & > svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
  }
`
