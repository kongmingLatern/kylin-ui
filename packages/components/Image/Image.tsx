import React, { useState } from 'react'
import { Spin } from '@components/Spin'
import { ImageProps } from './type'

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
    setLoading(false)
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
        style={{ display: loading ? 'none' : 'block' }}
        {...rest}
      />
    </Spin>
  )
})

export { Image }
