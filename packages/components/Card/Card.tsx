import React from 'react'
import classNames from 'classnames'
import type { CardProps } from './type'
import { CardContainer, CardCover } from './styled'
import { Content, Footer, Header } from '../Layout'
import { Space } from '../Space'
import { Title } from '../Typography'

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const {
      shape,
      children,
      Cover,
      Header: HeaderContainer,
      Title: TitleContainer,
      Content: ContentContainer,
      Footer: FooterContainer,
      ...rest
    } = props

    function CardContent(props) {
      const { className } = props
      const classes = classNames(
        'kylin-card-content',
        'p-2',
        className
      )
      return (
        <Content className={classes}>
          <Title level={1} strong>
            {TitleContainer}
          </Title>
          {ContentContainer || children}
        </Content>
      )
    }

    if (Cover) {
      const {
        element,
        size,
        position = 'top',
        shape = 'square',
      } = Cover

      return (
        <CardContainer shape={shape} ref={ref} {...rest}>
          <Space direction="vertical">
            <Header>{HeaderContainer}</Header>
            <CardCover
              position={position}
              size={size}
              shape={shape}
            >
              <div className="kylin-card-cover">
                {element}
              </div>
              <CardContent />
            </CardCover>
            <Footer>{FooterContainer}</Footer>
          </Space>
        </CardContainer>
      )
    }

    return (
      <CardContainer shape={shape} ref={ref} {...rest}>
        <Space direction="vertical">
          <Header>{HeaderContainer}</Header>
          <CardContent />
          <Footer>{FooterContainer}</Footer>
        </Space>
      </CardContainer>
    )
  }
)

export { Card }
