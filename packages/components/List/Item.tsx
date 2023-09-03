import React from 'react'
import { ItemProps } from './type'
import {
  ItemBox,
  ItemContainer,
  ItemHeader,
  ItemMain,
  ItemContent,
  ItemUL,
} from './styled/Item.styled'
import { Title, Paragraph } from '../Typography'
import { Avatar } from '../Avatar'
import { Col } from '../Grid'
import { Space } from '../Space'

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
            <ItemContent>
              <Title level={3} strong>
                {title}
              </Title>
              <main className="kylin-description">
                <Paragraph ellipsis>
                  {description}
                </Paragraph>
              </main>
            </ItemContent>
            {extra}
          </ItemHeader>
        </ItemMain>
      </ItemBox>
      <footer>
        <ItemUL style={footerStyle}>
          <Space size={20}>
            {actions &&
              actions.map((action, index) => (
                <Col
                  key={index}
                  style={{
                    alignItems: 'center',
                    marginRight: '.5rem',
                  }}
                >
                  {action}
                </Col>
              ))}
          </Space>
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
