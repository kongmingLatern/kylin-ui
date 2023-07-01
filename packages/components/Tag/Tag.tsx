import { styled } from 'styled-components'
import { TagProps } from './type'
import { theme as Theme } from '@packages/theme/src'

const TagContainer = styled.span<{
  type?: TagProps['type']
  size?: TagProps['size']
  shape?: TagProps['shape']
  gradient?: TagProps['gradient']
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  position?: 'before' | 'after'
  children?: any
}>`
  margin: ${props => {
    if (props.position === 'before') {
      return '0 4px 0 0'
    } else {
      return '0 0 0 4px'
    }
  }};
`

export const Tag: React.FC<TagProps> = props => {
  const {
    type,
    size,
    shape,
    gradient,
    text,
    beforeIcon,
    afterIcon,
    children,
  } = props

  if (text && children) {
    console.warn(`Tag组件的text和children属性不能同时存在`)
  }

  const renderToChildren = text ? text : children

  const BeforeIcon = () =>
    beforeIcon ? (
      <TagIcon position="before">{beforeIcon}</TagIcon>
    ) : null

  const AfterIcon = () =>
    afterIcon ? (
      <TagIcon position="after">{afterIcon}</TagIcon>
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
    <TagContainer
      type={type}
      size={size}
      shape={shape}
      gradient={gradient}
    >
      <IconNode>{renderToChildren}</IconNode>
    </TagContainer>
  )
}
