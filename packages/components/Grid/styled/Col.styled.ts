import { styled } from 'styled-components'
import { ColProps } from '../type'

export const ColContainer = styled.div<{
  flex: ColProps['flex']
  span?: ColProps['span']
}>`
  flex: ${props =>
    getFlex(props.flex, { span: props.span ?? 0 })};
`

function getFlex(flex, { span }: any) {
  // flex="1 1 auto" / flex="1"
  if (flex) {
    return flex
  }

  // span="24" => flex="0 0 100%"
  // span="12" => flex="0 0 50%"
  if (span) {
    return `0 0 ${(span / 24) * 100}%`
  }
}
