import React from 'react'
import { ListProps } from './type'
import { ItemContainer } from './styled/Item.styled'

const InternalUl: React.ForwardRefRenderFunction<
  HTMLLIElement,
  ListProps
> = (props, ref) => {
  const { children } = props
  return <ItemContainer ref={ref}>{children}</ItemContainer>
}

const Item = React.forwardRef(InternalUl)

if (process.env.NODE_ENV !== 'production') {
  Item.displayName = 'Item'
}
export { Item }
