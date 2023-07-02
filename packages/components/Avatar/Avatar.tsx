import React from 'react'
import { AvatarProps } from './type'
import { AvatarContainer } from './Avatar.styled'

const InternalAvatar: React.ForwardRefRenderFunction<
  HTMLImageElement,
  AvatarProps
> = (props, ref) => {
  const {
    src,
    alt,
    icon,
    size: customSize = 'middle',
    shape = 'circle',
    draggable,
    children,
    ...rest
  } = props

  // FIXME: 这里可以考虑加一个上下文参数值
  // const size =
  //   customSize === 'middle' ? contextSize : customSize

  const isImgExist = src && src.length > 0

  if (isImgExist && React.isValidElement(children)) {
    console.warn(
      'Avatar',
      `Avatar children and src can not exist at same time.`
    )
  }

  let childrenToRender

  if (typeof src === 'string' && isImgExist) {
    childrenToRender = (
      <img
        ref={ref}
        src={src}
        alt={alt}
        draggable={draggable}
      />
    )
  } else if (icon) {
    childrenToRender = icon
  }

  return (
    <AvatarContainer
      size={customSize}
      shape={shape}
      {...rest}
    >
      {childrenToRender}
    </AvatarContainer>
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
