import React from 'react'
import type { CardProps } from './type'
import { Content, Footer, Paragraph, Title } from '..'
import classNames from 'classnames'

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const {
      Cover,
      Header: HeaderContainer,
      Content: ContentContainer,
      Footer: FooterContainer,
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

      const classes = classNames(
        {
          [`kylin-card-position-${position}`]: position,
          [`kylin-card-size-${size}`]: size,
          [`kylin-card-shape-${shape}`]: shape,
        },
        'flex'
      )

      return (
        <div className="inline-flex flex-col p-2" ref={ref}>
          <div
            className={classes}
            dir={position === 'right' ? 'rtl' : 'auto'}
          >
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
  }
)

export { Card }
