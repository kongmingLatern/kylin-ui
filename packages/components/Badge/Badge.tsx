import classNames from 'classnames'
import { BadgeProps } from './type'
import React from 'react'

const badgeSize = {
  default: 12,
  small: 20,
}

export const InternalBadge: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  BadgeProps
> = (props, ref) => {
  const {
    type = 'primary',
    size = 'small',
    shape = 'square',
    color = 'white',
    bgColor,
    gradient,
    text,
    offset,
    style,
    children,
    className,
    ...rest
  } = props

  const [offsetTop, offsetRight] = offset ?? [
    '-1rem',
    '-1.5rem',
  ]

  const classes = classNames(
    {
      [`kylin-badge`]: true,
      [`kylin-badge-gradient-${gradient}`]: gradient,
      [`kylin-badge-type-${type}`]: type,
      [`kylin-badge-shape-${shape}`]: shape,
    },
    'whitespace-nowrap',
    'relative',
    className
  )

  const getSize = React.useMemo(() => {
    if (/\d+/g.test(size as string)) return Number(size)

    return typeof size === 'string' ? badgeSize[size] : size
  }, [size])

  const CircleHeight = React.useMemo(() => {
    return shape === 'circle'
      ? {
          width: getSize + 'px',
          height: getSize + 'px',
        }
      : {
          height: getSize + 'px',
        }
  }, [size])

  const addSuffix = offset =>
    typeof offset === 'number' ? offset + 'px' : offset

  return (
    <span className="relative inline-flex" ref={ref}>
      {text && (
        <sup
          style={{
            position: 'absolute',
            top: addSuffix(offsetTop),
            right: addSuffix(offsetRight),
            height: getSize + 'px',
            zIndex: 10,
          }}
        >
          <span
            className={classes}
            style={{
              color,
              background: bgColor,
              ...CircleHeight,
              ...style,
            }}
            {...rest}
          >
            {text}
          </span>
        </sup>
      )}
      {children}
    </span>
  )
}

export const Badge = React.forwardRef<
  HTMLSpanElement,
  BadgeProps
>(InternalBadge)

if (process.env.NODE_ENV !== 'production') {
  Badge.displayName = 'Badge'
}
