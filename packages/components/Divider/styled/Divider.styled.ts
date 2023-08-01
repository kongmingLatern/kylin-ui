import { css, styled } from 'styled-components'
import { DividerProps } from '../type'

export const DividerContainer = styled.div<{
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

  ${({ orientation }) =>
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
      color: rgba(0, 0, 0, 0.45);
      ${getOrientation(orientation)}
    `}

  ${({ $dashed }) =>
    $dashed &&
    css`
      border-top: 1px dashed #e8e8e8;
    `}


  ${({ $plain }) =>
    $plain &&
    css`
      border: none;
    `}

  ${({ $orientationLeft }) =>
    $orientationLeft &&
    css`
      &::before {
        content: '';
        width: 0%;
        height: 1px;
        background: #e8e8e8;
      }
      &::after {
        content: '';
        width: 95%;
        height: 1px;
        background: #e8e8e8;
      }
    `}

  ${({ $orientationRight }) =>
    $orientationRight &&
    css`
      &::before {
        content: '';
        width: 95%;
        height: 1px;
        margin-right: 8px;
        background: #e8e8e8;
      }
      &::after {
        content: '';
        width: 5%;
        height: 1px;
        background: #e8e8e8;
      }
    `}


  ${({ type }) => {
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
          border-left: 1px solid #e8e8e8;
          margin: 0 0.5rem;
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
  position: DividerProps['orientation']
) {
  switch (position) {
    case 'center':
      return css`
        &::before {
          content: '';
          flex: 1;
          border-top: 1px solid #e8e8e8;
        }

        &::after {
          content: '';
          flex: 1;
          border-top: 1px solid #e8e8e8;
        }
        /* &::before {
          content: '';
          width: 5%;
          height: 1px;
          margin-right: 8px;
          background: #e8e8e8;
        }
        &::after {
          content: '';
          width: 95%;
          height: 1px;
          background: #e8e8e8;
        } */
      `
    case 'left':
      return css`
        &::before {
          content: '';
          width: 5%;
          height: 1px;
          margin-right: 8px;
          background: #e8e8e8;
        }
        &::after {
          content: '';
          width: 95%;
          height: 1px;
          background: #e8e8e8;
        }
      `
    case 'right':
      return css`
        &::before {
          content: '';
          width: 95%;
          height: 1px;
          margin-right: 8px;
          background: #e8e8e8;
        }
        &::after {
          content: '';
          width: 5%;
          height: 1px;
          background: #e8e8e8;
        }
      `
    default:
      return css`
        &::before {
          content: '';
          flex: 1;
          border-top: 1px solid #e8e8e8;
        }

        &::after {
          content: '';
          flex: 1;
          border-top: 1px solid #e8e8e8;
        }
      `
  }
}
