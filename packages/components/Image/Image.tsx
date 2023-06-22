import React, { useState } from 'react'
import { ImageProps } from './type'
import { Spin } from '@components/Spin'

const Image = React.forwardRef<
  HTMLImageElement,
  ImageProps
>((props, ref) => {
  const {
    src,
    alt,
    width,
    height,
    onLoad,
    onError,
    ...rest
  } = props

  const [loading, setLoading] = useState(true)

  const handleOnLoad = () => {
    if (onLoad) {
      onLoad()
    }
    setLoading(false)
  }

  const handleOnError = () => {
    if (onError) {
      onError()
    }
  }

  return (
    <Spin spinning={loading}>
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        onLoad={handleOnLoad}
        onError={handleOnError}
        ref={ref}
        style={{ display: loading ? 'block' : 'none' }}
        {...rest}
      />
    </Spin>
  )
})

export { Image }
