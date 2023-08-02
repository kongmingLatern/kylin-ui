import { css, styled } from 'styled-components'
import { TypographyType } from '../type'
import { getColorByType } from '@packages/styled-system'

export const CodeContainer = styled.code<{
  type?: TypographyType['type']
  $deleteLine?: boolean
  $underline?: boolean
  $disabled?: boolean
  $ellipsis?: boolean
  $italic?: boolean
  $strong?: boolean
  $indent?: boolean
}>`
  margin: 0 0.2em;
  padding-inline: 0.4em;
  padding-block: 0.2em 0.1em;
  font-size: 85%;
  font-family: sfmono-regular, Consolas, liberation mono,
    Menlo, Courier, monospace;
  background: rgba(254, 228, 228, 0.45);
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 3px;
  color: ${({ type }) => getColorByType(type)};
  text-decoration: ${({ $deleteLine, $underline }) =>
    getTextDecoration($deleteLine, $underline)};
  font-style: ${({ $italic }) =>
    $italic ? 'italic' : 'normal'};

  font-weight: ${({ $strong }) =>
    $strong ? 'bold' : 'normal'};

  ${$ellipsis => $ellipsis && getEllipsis(!!$ellipsis)}

  text-indent: ${({ $indent }) => ($indent ? '2em' : '0')};

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: ${getColorByType('disabled')};
      cursor: not-allowed;
      user-select: none;
    `}
`

function getTextDecoration(
  isDeleteLine?: boolean,
  isUnderline?: boolean
) {
  if (isDeleteLine) {
    return 'line-through'
  } else if (isUnderline) {
    return 'underline'
  } else {
    return
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
