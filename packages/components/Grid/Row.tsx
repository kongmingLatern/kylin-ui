import React from 'react'
import { RowProps } from './type'
import { RowContainer } from './styled'

const InternalRow: React.ForwardRefRenderFunction<
  HTMLDivElement,
  RowProps
> = (props, ref) => {
  const {
    gutter = 0,
    justify = 'start',
    align = 'start',
    wrap = 'wrap',
    style,
    children,
    ...rest
  } = props
  const [horizontal, vertical] = Array.isArray(gutter)
    ? gutter
    : [gutter, 0]
  const rowStyle = {
    ...style,
    marginLeft: horizontal / -2,
    marginRight: horizontal / -2,
    marginTop: vertical / -2,
    marginBottom: vertical / -2,
  }

  const childrenWithProps = React.Children.map(
    children,
    child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          gutter: [horizontal / 2, vertical / 2],
        } as any)
      }
      return child
    }
  )
  return (
    <RowContainer
      ref={ref}
      justify={justify}
      align={align}
      wrap={wrap}
      {...rest}
      style={rowStyle}
    >
      {childrenWithProps}
    </RowContainer>
  )
}

const Row = React.forwardRef<HTMLDivElement, RowProps>(
  InternalRow as any
)

export { Row }
