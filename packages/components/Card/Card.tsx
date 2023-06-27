import React from 'react'
import type { CardProps } from './type'
import { Content, Footer, Paragraph, Title } from '..'

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { Cover } = props

    function CardContent() {
      return (
        <>
          <Content>
            <Title>卡片标题</Title>

            <Paragraph>卡片内容</Paragraph>
          </Content>

          <Footer>
            <Paragraph>卡片底部</Paragraph>
          </Footer>
        </>
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
        <div>
          {/* Cover */}
          <div>{element}</div>
          <CardContent />
        </div>
      )
    }
    return <CardContent />
  }
)

export { Card }
