import {
  getFontSize,
  getRadius,
  getWidthHeightSize,
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

  width: ${({ size }) => getWidthHeightSize(size)};
  height: ${({ size }) => getWidthHeightSize(size)};
  font-size: ${({ size }) => getFontSize(size)};
  line-height: ${({ size }) => getWidthHeightSize(size)};

  border-radius: ${({ shape }) => getRadius(shape)};

  & > img,
  & > svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
  }
`
