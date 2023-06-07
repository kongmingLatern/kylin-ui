import classNames from 'classnames'
import React from 'react'

interface AvatarProps {
  src?: string
  alt?: string
  size?: number | 'small' | 'large' | 'default'
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
    size: customSize = 'default',
    shape = 'circle',
    draggable,
    className,
    style,
    children,
    ...rest
  } = props

  // FIXME: 这里可以考虑加一个上下文参数值
  // const size =
  //   customSize === 'default' ? contextSize : customSize

  const size = customSize === 'default' ? 32 : customSize

  const isImgExist = src && src.length > 0

  if (isImgExist && React.isValidElement(children)) {
    console.warn(
      'Avatar',
      `Avatar children and src can not exist at same time.`
    )
  }

  const sizeCls = classNames({
    [`kylin-avatar-lg`]: size === 'large',
    [`kylin-avatar-sm`]: size === 'small',
  })

  const classes = classNames(
    sizeCls,
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

  let childrenToRender

  if (typeof src === 'string' && isImgExist) {
    childrenToRender = (
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
  } else if (icon) {
    childrenToRender = icon
  }

  return (
    <span
      style={{
        ...sizeStyle,
        ...(rest as AvatarProps).style,
      }}
      className={classes}
    >
      {childrenToRender}
    </span>
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
