import React from 'react'
import { ImageProps } from './type'

const Image = React.forwardRef<
  HTMLImageElement,
  ImageProps
>((props, ref) => {
  const { src, alt, ...rest } = props

  return <img src={src} alt={alt} {...rest} ref={ref} />
})

export { Image }
