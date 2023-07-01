import { styled } from 'styled-components'
import { TagProps } from './type'
import { theme as Theme } from '@packages/theme/src'

const TagContainer = styled.span<{
  type?: TagProps['type']
  size?: TagProps['size']
  shape?: TagProps['shape']
  gradient?: TagProps['gradient']
}>`
  background: ${props => {
    if (props.gradient) {
      return Theme[props.gradient]
    }
    return Theme[props.type!] ?? Theme['default']
  }};
  color: white;
  padding: ${props =>
    props.size ? Theme[props.size] : Theme['middle']};
  border-radius: ${props => {
    if (props.shape) {
      return Theme[props.shape]
    } else {
      return Theme['square']
    }
  }};
  font-weight: 700;
  white-space: nowrap;
`

const TagIcon = styled.span<{
  beforeIcon?: React.ReactDOM
  afterIcon?: React.ReactDOM
  children?: React.ReactDOM
}>`
  margin: ${props => {
    if (props.beforeIcon) {
      return '0 4px 0 0'
    } else {
      return '0 0 0 4px'
    }
  }};
`

export const Tag: React.FC<TagProps> = props => {
  const { text, beforeIcon, afterIcon, children } = props

  if (text && children) {
    console.warn(`Tag组件的text和children属性不能同时存在`)
  }

  const renderToChildren = text ? text : children

  const BeforeIcon = () =>
    beforeIcon ? (
      <TagIcon beforeIcon={beforeIcon}>
        {beforeIcon}
      </TagIcon>
    ) : null

  const AfterIcon = () =>
    afterIcon ? (
      <TagIcon afterIcon={afterIcon}>{afterIcon}</TagIcon>
    ) : null

  const IconNode = ({ children }) => {
    return (
      <>
        <BeforeIcon />
        {children}
        <AfterIcon />
      </>
    )
  }

  return (
    <TagContainer {...props}>
      <IconNode>{renderToChildren}</IconNode>
    </TagContainer>
  )
}
