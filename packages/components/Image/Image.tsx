import React, { useState } from 'react'
import { Spin } from '@components/Spin'
import { ImageProps } from './type'
import classNames from 'classnames'

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
    preview = true,
    ...rest
  } = props

  const [loading, setLoading] = useState(true)

  // TODO: 图片的预览功能
  const classes = classNames({
    ['kylin-image-preview']: preview,
  })

  const handleOnLoad = e => {
    if (onLoad) {
      console.log(e)
      onLoad(e)
    }
    setLoading(false)
  }

  const handleOnError = e => {
    if (onError) {
      console.log(e)
      onError(e)
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
        className={classes}
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
