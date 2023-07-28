import React from 'react'
import { InputNumberProps } from './type'

const InternalInputNumber: React.ForwardRefRenderFunction<
  HTMLDivElement,
  InputNumberProps
> = (props, ref) => {
  const { children } = props
  return <div ref={ref}>{children}</div>
}

const InputNumber = React.forwardRef(InternalInputNumber)

if (process.env.NODE_ENV !== 'production') {
  InputNumber.displayName = 'InputNumber'
}
export { InputNumber }
