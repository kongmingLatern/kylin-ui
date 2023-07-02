import React from 'react'
import { TagContainer, TagIcon } from './Tag.styled'
import { TagProps } from './type'

const TagComponent: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  TagProps
> = (props, ref) => {
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
      ref={ref}
    >
      <IconNode>{renderToChildren}</IconNode>
    </TagContainer>
  )
}
export const Tag = React.forwardRef(TagComponent)
