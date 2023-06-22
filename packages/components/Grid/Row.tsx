import classNames from 'classnames'
import React from 'react'

type RowProps = {
  gutter?: number | [number, number]
  wrap?: 'start' | 'reverse'
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between'
  align?: 'start' | 'center' | 'end'
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}
const Row = React.forwardRef<HTMLDivElement, RowProps>(
  (props, ref) => {
    const {
      gutter = 0,
      justify = 'start',
      align = 'start',
      wrap = 'start',
      className,
      style,
      children,
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
    const rowClassNames = classNames(
      {
        ['kylin-grid-row']: true,
        [`kylin-grid-justify-${justify}`]: justify,
        [`kylin-grid-align-${align}`]: align,
        [`kylin-grid-wrap-${wrap}`]: wrap,
      },
      className
    )
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
      <div
        ref={ref}
        className={rowClassNames}
        style={rowStyle}
      >
        {childrenWithProps}
      </div>
    )
  }
)

export { Row }
