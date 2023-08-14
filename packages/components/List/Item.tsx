import React from 'react'
import { ItemProps } from './type'
import { ItemContainer } from './styled/Item.styled'
import { Title, Paragraph } from '../Typography'
import { Avatar } from '../Avatar'

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
      <div className="flex items-center">
        {AvatarRender()}
        <main className="flex flex-col">
          <header className="flex justify-between items-center">
            <Title>{title}</Title>
            <span>{extra}</span>
          </header>
          <main>
            <Paragraph>{description}</Paragraph>
          </main>
        </main>
      </div>
    </ItemContainer>
  )
}

const Item = React.forwardRef(InternalLi)

if (process.env.NODE_ENV !== 'production') {
  Item.displayName = 'Item'
}
export { Item }
