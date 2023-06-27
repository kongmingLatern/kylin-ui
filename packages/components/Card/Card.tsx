import React from 'react'
import type { CardProps } from './type'
import { Content, Footer, Paragraph, Title } from '..'
import classNames from 'classnames'

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { Cover } = props

    function CardContent(props) {
      const { className } = props
      const classes = classNames(
        'kylin-card-content',
        className
      )
      return (
        <Content className={classes}>
          <Title level={1} strong>
            卡片标题
          </Title>
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
        <div className="inline-flex flex-col p-2" ref={ref}>
          <div className="flex">
            <div className="kylin-card-cover">
              {element}
            </div>
            <CardContent />
          </div>
          <Footer className="bg-blue-300">
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
