import React from 'react'
import { ItemProps } from './type'
import { ItemContainer } from './styled/Item.styled'
import { Avatar } from '..'

const InternalLi: React.ForwardRefRenderFunction<
  HTMLLIElement,
  ItemProps
> = (props, ref) => {
  const {
    avatar,
    title,
    description,
    extra,
    actions,
    children,
  } = props
  const AvatarRender = () => {
    return typeof avatar === 'string' ? (
      <Avatar src={avatar} />
    ) : (
      avatar
    )
  }
  return (
    <ItemContainer ref={ref}>
      {AvatarRender()}
    </ItemContainer>
  )
}

const Item = React.forwardRef(InternalLi)

if (process.env.NODE_ENV !== 'production') {
  Item.displayName = 'Item'
}
export { Item }
