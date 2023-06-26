import React from 'react'
import type { CardProps } from './type'
import { Paragraph, Title } from '..'

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    const { Cover } = props
    let CoverRender

    if (Cover) {
      const { element, description, size } = Cover
      CoverRender = element ? element : null
    }

    return (
      <div>
        {CoverRender}
        <Title>卡片标题</Title>

        <Paragraph>卡片内容</Paragraph>
      </div>
    )
  }
)

export { Card }
