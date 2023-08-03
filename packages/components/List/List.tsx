import React from 'react'
import { ListProps } from './type'
import { ListContainer } from './styled'

const InternalList: React.ForwardRefRenderFunction<
  HTMLUListElement,
  ListProps
> = (props, ref) => {
  const { dataSource, children } = props
  return <ListContainer ref={ref}>{children}</ListContainer>
}

const List = React.forwardRef(InternalList)

if (process.env.NODE_ENV !== 'production') {
  List.displayName = 'List'
}
export { List }
