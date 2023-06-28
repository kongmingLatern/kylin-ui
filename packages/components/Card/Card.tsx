import React from 'react'
import type { CardProps } from './type'
import { Content, Footer } from '../Layout'
import { Title } from '../Typography'
import classNames from 'classnames'

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const {
      shape,
      className,
      children,
      Cover,
      Header: HeaderContainer,
      Content: ContentContainer,
      Footer: FooterContainer,
      ...rest
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
          {ContentContainer || children}
        </Content>
      )
    }

    const containerClass = classNames(
      {
        [`kylin-card-shape-${shape}`]: shape,
      },
      'kylin-card-container',
      'flex',
      'flex-col',
      'p-2',
      className
    )

    if (Cover) {
      const {
        element,
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
        <div className={containerClass} ref={ref} {...rest}>
          <div className={classes}>
            <div className="kylin-card-cover">
              {element}
            </div>
            <CardContent />
          </div>
          <Footer>{FooterContainer}</Footer>
        </div>
      )
    }

    return (
      <div className={containerClass} ref={ref} {...rest}>
        <CardContent />
        <Footer>{FooterContainer}</Footer>
      </div>
    )
  }
)

export { Card }
