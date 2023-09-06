import { css, styled } from 'styled-components'
import { DividerProps } from '../type'

export const DividerContainer = styled.div<{
  color?: DividerProps['color']
  type?: DividerProps['type']
  orientation?: DividerProps['orientation']
  $dashed?: DividerProps['dashed']
  $plain?: DividerProps['plain']
  $orientationLeft?: boolean
  $orientationRight?: boolean
}>`
  position: relative;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${({ color, orientation }) =>
    orientation &&
    css`
      position: relative;
      top: -0.06em;
      display: flex;
      align-items: center;
      padding: 0 8px;
      font-size: 12px;
      font-variant: tabular-nums;
      line-height: 1;
      white-space: nowrap;
      ${getOrientation(color, orientation)}
    `}

  ${({ color, $dashed }) =>
    $dashed &&
    css`
      border-top: 1px dashed ${color};
    `}


  ${({ $plain }) =>
    $plain &&
    css`
      border: none;
    `}

  ${({ color, $orientationLeft }) =>
    $orientationLeft &&
    css`
      &::before {
        content: '';
        width: 0%;
        height: 1px;
        background: ${color};
      }
      &::after {
        content: '';
        width: 95%;
        height: 1px;
        background: ${color};
      }
    `}

  ${({ color, $orientationRight }) =>
    $orientationRight &&
    css`
      &::before {
        content: '';
        width: 95%;
        height: 1px;
        margin-right: 8px;
        background: ${color};
      }
      &::after {
        content: '';
        width: 5%;
        height: 1px;
        background: ${color};
      }
    `}


  ${({ color, type }) => {
    switch (type) {
      case 'horizontal':
        return css`
          margin: 16px 0;
        `
      case 'vertical':
        return css`
          display: inline-block;
          height: 1.1rem;
          border-top: 0;
          border-left: 1px solid ${color};
          margin: 0 0.5rem;
          padding: 0;
        `
    }
  }}
`

export const DividerInnerText = styled.span`
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
  height: 100%;
  font-size: 0.8rem;
  font-variant: tabular-nums;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.45);
`

function getOrientation(
  color: DividerProps['color'],
  position: DividerProps['orientation']
) {
  switch (position) {
    case 'center':
      return css`
        &::before {
          content: '';
          flex: 1;
          border-top: 1px solid ${color};
        }

        &::after {
          content: '';
          flex: 1;
          border-top: 1px solid ${color};
        }
      `
    case 'left':
      return css`
        &::before {
          content: '';
          width: 5%;
          height: 1px;
          margin-right: 8px;
          background: ${color};
        }
        &::after {
          content: '';
          width: 95%;
          height: 1px;
          background: ${color};
        }
      `
    case 'right':
      return css`
        &::before {
          content: '';
          width: 95%;
          height: 1px;
          margin-right: 8px;
          background: ${color};
        }
        &::after {
          content: '';
          width: 5%;
          height: 1px;
          background: ${color};
        }
      `
    default:
      return css`
        &::before {
          content: '';
          flex: 1;
          border-top: 1px solid ${color};
        }

        &::after {
          content: '';
          flex: 1;
          border-top: 1px solid ${color};
        }
      `
  }
}
