import React from 'react'
import { ItemProps } from './type'
import { ItemContainer } from './styled/Item.styled'

const InternalLi: React.ForwardRefRenderFunction<
  HTMLLIElement,
  ItemProps
> = (props, ref) => {
  const { children } = props
  return <ItemContainer ref={ref}>{children}</ItemContainer>
}

const Item = React.forwardRef(InternalLi)

if (process.env.NODE_ENV !== 'production') {
  Item.displayName = 'Item'
}
export { Item }
