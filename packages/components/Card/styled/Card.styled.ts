import { styled } from 'styled-components'
import { CardProps, CoverProps } from '../type'
import {
  getCoverPosition,
  getCoverWidth,
  getRadius,
} from '@packages/styled-system'

export const CardContainer = styled.div<{
  shape: CardProps['shape']
}>`
  display: inline-flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #f0f0f0;
  overflow: hidden;
  border-radius: ${({ shape }) => getRadius(shape)};
  &:hover {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  }
`

export const CardCover = styled.div<{
  position?: CoverProps['position']
  size?: CoverProps['size']
  shape?: CoverProps['shape']
}>`
  display: flex;
  flex-direction: ${({ position }) =>
    getCoverPosition(position)};

  width: ${({ size }) => getCoverWidth(size)};
`
