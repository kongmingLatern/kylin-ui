import React from 'react'
import { ColProps, ColSize } from './type'
import { ColContainer } from './styled/Col.styled'
import RowContext from './RowContent'
import { LiteralUnion } from '@kylin-ui/shared'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const

type FlexType = number | LiteralUnion<'none' | 'auto'>

function parseFlex(flex: FlexType): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`
  }

  return flex
}

const InternalCol: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ColProps
> = (props, ref) => {
  const { flex, span, offset, children, style, ...rest } =
    props

  const { gutter, wrap, supportFlexGap } =
    React.useContext(RowContext)

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

  const mergedStyle: React.CSSProperties = {}
  // Horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2
    mergedStyle.paddingLeft = horizontalGutter
    mergedStyle.paddingRight = horizontalGutter
  }

  // Vertical gutter use padding when gap not support
  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    const verticalGutter = gutter[1] / 2
    mergedStyle.paddingTop = verticalGutter
    mergedStyle.paddingBottom = verticalGutter
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex)
    if (wrap !== 'wrap' && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0
    }
  }

  return (
    <ColContainer
      flex={flex}
      ref={ref}
      offset={offset}
      span={span || sizeClassObj['span']}
      {...rest}
      style={{
        ...mergedStyle,
        ...style,
      }}
    >
      {children}
    </ColContainer>
  )
}

const Col = React.forwardRef(InternalCol)

if (process.env.NODE_ENV !== 'production') {
  Col.displayName = 'Col'
}

export { Col }
