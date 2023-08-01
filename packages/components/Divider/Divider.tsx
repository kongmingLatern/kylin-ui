import classNames from 'classnames'
import React from 'react'
import { DividerProps } from './type'
import {
  DividerContainer,
  DividerInnerText,
} from './styled'

const Divider = React.forwardRef<
  HTMLDivElement,
  DividerProps
>((props, ref) => {
  const {
    type = 'horizontal',
    orientation = 'center',
    orientationMargin,
    dashed,
    plain,
    children,
    ...rest
  } = props

  const hasChildren = !!children
  const hasCustomMarginLeft =
    orientation === 'left' && orientationMargin != null
  const hasCustomMarginRight =
    orientation === 'right' && orientationMargin != null

  const classes = classNames({
    [`kylin-divider`]: true,
    [`kylin-divider-with-text-${orientation}`]: hasChildren,
    [`kylin-divider-dashed`]: !!dashed,
    [`kylin-divider-plain`]: !!plain,
    [`kylin-divider-no-default-orientation-margin-left`]:
      hasCustomMarginLeft,
    [`kylin-divider-no-default-orientation-margin-right`]:
      hasCustomMarginRight,
    [`kylin-divider-${type}`]: !!type,
  })

  const memoizedOrientationMargin = React.useMemo<
    string | number
  >(() => {
    if (typeof orientationMargin === 'number') {
      return orientationMargin
    }
    if (/^\d+$/.test(orientationMargin!)) {
      return Number(orientationMargin)
    }
    return orientationMargin!
  }, [orientationMargin])

  const innerStyle: React.CSSProperties = {
    ...(hasCustomMarginLeft && {
      marginLeft: memoizedOrientationMargin,
    }),
    ...(hasCustomMarginRight && {
      marginRight: memoizedOrientationMargin,
    }),
  }
  return (
    <DividerContainer
      ref={ref}
      type={type}
      orientation={orientation}
      $dashed={!!dashed}
      $plain={!!dashed}
      $orientationLeft={hasCustomMarginLeft}
      $orientationRight={hasCustomMarginRight}
      {...rest}
      role="separator"
    >
      {children && type !== 'vertical' && (
        <DividerInnerText style={innerStyle}>
          {children}
        </DividerInnerText>
      )}
    </DividerContainer>
  )
})

export { Divider }
