import React from 'react'
import type { CardProps } from './type'

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref) => {
    return <>Card</>
  }
)

export { Card }
