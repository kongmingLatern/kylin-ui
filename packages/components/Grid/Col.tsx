import React from 'react'
import { ColProps, ColSize } from './type'
import { ColContainer } from './styled/Col.styled'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const

const InternalCol: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ColProps
> = (props, ref) => {
  const { flex, span, children, ...rest } = props

  // NOTE: <Col sm={12} lg={20}></Col>
  let sizeClassObj = {}
  sizes.forEach(size => {
    let sizeProps: ColSize = {}
    const propSize = props[size]
    if (typeof propSize === 'number') {
      sizeProps.span = propSize
    } else if (typeof propSize === 'object') {
      sizeProps = propSize || {}
    }

    delete rest[size]
    // NOTE: sizeProps = { span: 12, sm: 12, lg: 20,  ... }
    sizeClassObj = {
      ...sizeClassObj,
    }
  })

  return (
    <ColContainer
      flex={flex}
      ref={ref}
      span={span || sizeClassObj['span']}
      {...rest}
    >
      {children}
    </ColContainer>
  )
}

const Col = React.forwardRef(InternalCol)

export { Col }
