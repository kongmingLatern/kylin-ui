import React from 'react'
import { ColProps } from './type'
import { ColContainer } from './styled/Col.styled'

const InternalCol: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ColProps
> = (props, ref) => {
  const { flex, children, ...rest } = props
  return (
    <ColContainer flex={flex} ref={ref} {...rest}>
      {children}
    </ColContainer>
  )
}

const Col = React.forwardRef(InternalCol)

export { Col }
