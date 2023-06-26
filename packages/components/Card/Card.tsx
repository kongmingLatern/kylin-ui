import React from 'react'
import type { CardProps } from './type'
import { Paragraph, Title } from '..'

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { Cover } = props

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
          {element}
          <Title>卡片标题</Title>

          <Paragraph>卡片内容</Paragraph>
        </div>
      )
    }
    return (
      <div>
        <Title>卡片标题</Title>
        <Paragraph>卡片内容</Paragraph>
      </div>
    )
  }
)

export { Card }
