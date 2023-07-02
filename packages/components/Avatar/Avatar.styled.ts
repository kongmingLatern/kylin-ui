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

  width: ${props => getWidthHeightSize(props.size)};
  height: ${props => getWidthHeightSize(props.size)};
  font-size: ${props => getFontSize(props.size)};
  line-height: ${props => getWidthHeightSize(props.size)};

  border-radius: ${props => getRadius(props.shape)};

  & > img,
  & > svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
  }
`