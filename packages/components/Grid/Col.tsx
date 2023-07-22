import React from 'react'
import { ColProps } from './type'

const InternalCol: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ColProps
> = (props, ref) => {
  const { children } = props
  return <div ref={ref}>{children}</div>
}

const Col = React.forwardRef(InternalCol)

export { Col }
