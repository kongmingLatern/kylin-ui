import React from 'react'
import { ItemProps } from './type'
import {
  ItemBox,
  ItemContainer,
  ItemHeader,
  ItemMain,
  ItemUL,
} from './styled/Item.styled'
import { Title, Paragraph } from '../Typography'
import { Avatar } from '../Avatar'
import { Col } from '../Grid'

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
    footerStyle,
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
      <ItemBox>
        {AvatarRender()}
        <ItemMain>
          <ItemHeader>
            <Title level={3} strong>
              {title}
            </Title>
            {extra}
          </ItemHeader>
          <main className="kylin-description">
            <Paragraph>{description}</Paragraph>
          </main>
        </ItemMain>
      </ItemBox>
      <footer>
        <ItemUL style={footerStyle}>
          {actions &&
            actions.map((action, index) => (
              <Col key={index} span={24 / actions.length}>
                {action}
              </Col>
            ))}
        </ItemUL>
      </footer>
    </ItemContainer>
  )
}

const Item = React.forwardRef(InternalLi)

if (process.env.NODE_ENV !== 'production') {
  Item.displayName = 'Item'
}
export { Item }
