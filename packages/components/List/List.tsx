import React from 'react'
import { ListProps } from './type'
import { ListContainer } from './styled'
import { Item } from './Item'

const InternalList: React.ForwardRefRenderFunction<
  HTMLUListElement,
  ListProps
> = (props, ref) => {
  const { dataSource, children } = props

  if (children) {
    return (
      <ListContainer ref={ref}>{children}</ListContainer>
    )
  }

  return (
    <ListContainer ref={ref}>
      {dataSource?.map((item, index) => {
        return <Item key={index}>{item}</Item>
      })}
    </ListContainer>
  )
}

const List = React.forwardRef(InternalList)

if (process.env.NODE_ENV !== 'production') {
  List.displayName = 'List'
}
export { List }
