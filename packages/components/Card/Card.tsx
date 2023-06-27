import React from 'react'
import type { CardProps } from './type'
import { Content, Footer, Paragraph, Title } from '..'
import classNames from 'classnames'

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const {
      Cover,
      Header: HeaderContainer,
      Footer: FooterContainer,
      Content: ContentContainer,
    } = props

    function CardContent(props) {
      const { className } = props
      const classes = classNames(
        'kylin-card-content',
        className
      )
      return (
        <Content className={classes}>
          <Title level={1} strong>
            {HeaderContainer}
          </Title>
          <Paragraph>{ContentContainer}</Paragraph>
        </Content>
      )
    }

    if (Cover) {
      const {
        element,
        alt,
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
            <Paragraph>{FooterContainer}</Paragraph>
          </Footer>
        </div>
      )
    }
    return (
      <div className="inline-flex flex-col p-2">
        <CardContent />
        <Footer>
          <Paragraph>卡片底部</Paragraph>
        </Footer>
      </div>
    )
  }
)

export { Card }
