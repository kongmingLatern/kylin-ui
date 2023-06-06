import classNames from 'classnames'
import React from 'react'

interface AvatarProps {
  src?: string
  alt?: string
  size?: number
  shape?: 'circle' | 'square'
  draggable?: boolean
  className?: string
  style?: React.CSSProperties
  icon?: React.ReactNode
  children?: React.ReactNode
}

const InternalAvatar: React.ForwardRefRenderFunction<
  HTMLImageElement,
  AvatarProps
> = (props, ref) => {
  const {
    src,
    alt,
    icon,
    size = 32,
    shape = 'circle',
    draggable,
    className,
    style,
    children,
    ...rest
  } = props

  const isImgExist = src && src.length > 0

  if (isImgExist && React.isValidElement(children)) {
    console.warn(
      'Avatar',
      `Avatar children and src can not exist at same time.`
    )
  }

  const classes = classNames(
    {
      [`kylin-avatar-${shape}`]: !!shape,
      [`kylin-avatar-icon`]: !!icon,
      [`kylin-avatar-image`]:
        isImgExist || React.isValidElement(children),
    },
    className
  )

  const sizeStyle: React.CSSProperties =
    typeof size === 'number'
      ? {
          width: size,
          height: size,
          lineHeight: `${size}px`,
          fontSize: icon ? size / 2 : 18,
        }
      : {}

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      draggable={draggable}
      className={classes}
      style={{
        ...sizeStyle,
        ...(rest as AvatarProps).style,
      }}
    />
  )
}
const Avatar = React.forwardRef<
  HTMLSpanElement,
  AvatarProps
>(InternalAvatar as any)

if (process.env.NODE_ENV !== 'production') {
  Avatar.displayName = 'Avatar'
}

export default Avatar
