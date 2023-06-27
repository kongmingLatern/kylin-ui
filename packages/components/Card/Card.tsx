import React from 'react'
import type { CardProps } from './type'
import { Content, Footer, Paragraph, Title } from '..'

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { Cover } = props

    function CardContent(props) {
      const { className } = props
      return (
        <Content className={className}>
          <Title>卡片标题</Title>

          <Paragraph>卡片内容</Paragraph>
        </Content>
      )
    }

    if (Cover) {
      const {
        element,
        description,
        size = 'small',
        position = 'top',
        shape = 'square',
      } = Cover

      return (
        <div className="flex flex-col p-2">
          <div className="flex">
            <div className="kylin-card-cover flex-1">
              {element}
            </div>
            <CardContent className={'flex-1'} />
          </div>
          <Footer>
            <Paragraph>卡片底部</Paragraph>
          </Footer>
        </div>
      )
    }
    return (
      <div className="flex relative p-2">
        <CardContent />
        <Footer className="absolute bottom-0 left-0">
          <Paragraph>卡片底部</Paragraph>
        </Footer>
      </div>
    )
  }
)

export { Card }
