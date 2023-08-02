import { css, styled } from 'styled-components'
import { TypographyType } from '../type'
import { getColorByType } from '@packages/styled-system'

export const CodeContainer = styled.code<{
  type?: TypographyType['type']
  level?: TypographyType['level']
  $deleteLine?: boolean
  $underline?: boolean
  $disabled?: boolean
  $ellipsis?: boolean
  $italic?: boolean
  $strong?: boolean
  $indent?: boolean
}>`
  ${({
    type,
    $deleteLine,
    $underline,
    $disabled,
    $ellipsis,
    $italic,
    $strong,
    $indent,
  }) =>
    getBasicStyle(
      type,
      $deleteLine,
      $underline,
      $disabled,
      $ellipsis,
      $italic,
      $strong,
      $indent
    )}
`

export function getBasicStyle(
  type,
  $deleteLine,
  $underline,
  $disabled,
  $ellipsis,
  $italic,
  $strong,
  $indent,
  $mark?
) {
  return css`
    margin: 0 0.2em;
    padding-inline: 0.4em;
    padding-block: 0.2em 0.1em;
    font-size: 85%;
    font-family: sfmono-regular, Consolas, liberation mono,
      Menlo, Courier, monospace;
    border: 1px solid rgba(100, 100, 100, 0.2);
    border-radius: 3px;
    background: ${$mark
      ? getColorByType('warning')
      : '#fff'};

    color: ${type ? getColorByType(type) : '#000'};
    text-decoration: ${getTextDecoration(
      $deleteLine,
      $underline
    )};
    font-style: ${$italic ? 'italic' : 'normal'};

    font-weight: ${$strong ? 'bold' : 'normal'};

    ${$ellipsis && getEllipsis(!!$ellipsis)};

    text-indent: ${$indent ? '2em' : '0'};

    ${$disabled &&
    css`
      color: ${getColorByType('disabled')};
      cursor: not-allowed;
      user-select: none;
    `}

    ${$mark &&
    css`
      background: ${getColorByType('warning')};
      color: #fff;
    `}
  `
}

function getTextDecoration(
  isDeleteLine?: boolean,
  isUnderline?: boolean
) {
  if (isDeleteLine) {
    return 'line-through'
  } else if (isUnderline) {
    return 'underline'
  } else {
    return ''
  }
}

function getEllipsis(isEllipsis?: boolean) {
  if (isEllipsis) {
    return css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `
  } else {
    return
  }
}

export function getStyleByLevel(level) {
  switch (level) {
    case 1:
      return css`
        font-size: 2em;
        font-weight: 600;
      `
    case 2:
      return css`
        font-size: 1.5em;
        font-weight: 500;
      `
    case 3:
      return css`
        font-size: 1.17em;
      `
    case 4:
      return css`
        font-size: 1em;
      `
    case 5:
      return css`
        font-size: 0.83em;
      `
    case 6:
      return css`
        font-size: 0.67em;
      `
    default:
      return css`
        font-size: 1em;
      `
  }
}

export const TypographyContainer = tag => styled[tag]`
  ${({
    type,
    $deleteLine,
    $underline,
    $disabled,
    $ellipsis,
    $italic,
    $strong,
    $indent,
    $mark,
  }) =>
    getBasicStyle(
      type,
      $deleteLine,
      $underline,
      $disabled,
      $ellipsis,
      $italic,
      $strong,
      $indent,
      $mark
    )}
  ${({ level }) => level && getStyleByLevel(level)}
`
