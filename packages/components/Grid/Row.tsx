import React from 'react'
import { RowProps } from './type'
import { RowContainer } from './styled'
import { useFlexGapSupport } from '@kylin-ui/hooks'
import RowContext from './RowContent'

type Gap = number | undefined

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
  const supportFlexGap = useFlexGapSupport()
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

  const getGutter = (): [Gap, Gap] => {
    const results: [Gap, Gap] = [undefined, undefined]
    const normalizedGutter = Array.isArray(gutter)
      ? gutter
      : [gutter, undefined]
    normalizedGutter.forEach((g, index) => {
      results[index] = g
    })
    return results
  }

  const gutters = getGutter()
  const horizontalGutter =
    gutters[0] != null && gutters[0] > 0
      ? gutters[0] / -2
      : undefined
  const verticalGutter =
    gutters[1] != null && gutters[1] > 0
      ? gutters[1] / -2
      : undefined

  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter
    rowStyle.marginRight = horizontalGutter
  }

  if (supportFlexGap) {
    // Set gap direct if flex gap support
    ;[, rowStyle.rowGap] = gutters
  } else if (verticalGutter) {
    rowStyle.marginTop = verticalGutter
    rowStyle.marginBottom = verticalGutter
  }

  const [gutterH, gutterV] = gutters
  const rowContext = React.useMemo(
    () => ({
      gutter: [gutterH, gutterV] as [number, number],
      wrap,
      supportFlexGap,
    }),
    [gutterH, gutterV, wrap, supportFlexGap]
  )

  return (
    <RowContext.Provider value={rowContext}>
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
    </RowContext.Provider>
  )
}

const Row = React.forwardRef<HTMLDivElement, RowProps>(
  InternalRow as any
)

export { Row }
