import { css, styled } from 'styled-components'
import { SpinProps } from '../type'

export const SpinContainer = styled.div<{
  size?: SpinProps['size']
  $spinning?: SpinProps['spinning']
}>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #1677ff;
  font-size: 0;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  position: absolute;
  display: none;
  text-align: center;
  vertical-align: middle;
  opacity: 0;
  transition: transform 0.3s
    cubic-bezier(0.78, 0.14, 0.15, 0.86);

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          width: 14px;
          height: 14px;
          font-size: 14px;
        `
      case 'large':
        return css`
          width: 32px;
          height: 32px;
          font-size: 32px;
        `
      default:
        return css`
          width: 20px;
          height: 20px;
          font-size: 20px;
        `
    }
  }}

  ${({ $spinning }) =>
    $spinning &&
    css`
      position: static;
      display: inline-block;
      opacity: 1;
    `}
`

export const SpinDot = styled.span`
  position: absolute;
  top: 50%;
  inset-inline-start: 50%;
  margin: -10px;
`

export const SpinText = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  padding-top: 0.8rem;
  font-size: 1.4rem;
  user-select: none;
`

export const SpinNestPattern = styled.div`
  position: relative;
  & > div #kylin-spin {
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    z-index: 4;
    display: block;
    width: 100%;
    height: 100%;
    max-height: 400px;
  }
`

export const SpinContainerClass = styled.div<{
  $spinning?: SpinProps['spinning']
}>`
  position: relative;
  transition: opacity 0.3s;

  ${({ $spinning }) =>
    $spinning &&
    css`
      clear: both;
      opacity: 0.5;
      user-select: none;
      pointer-events: none;
    `}
`
