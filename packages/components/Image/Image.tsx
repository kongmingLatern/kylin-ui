import React, { useState } from 'react'
import { ImageProps } from './type'
import { Spin } from '@components/Spin'
import classNames from 'classnames'
import { Eye } from '@packages/icon'

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
  const [error, setErr] = useState(false)

  const classes = classNames({
    ['kylin-image-preview']: preview,
  })

  const handleOnLoad = e => {
    if (onLoad) {
      onLoad(e)
    }
    setLoading(false)
  }

  const handleOnError = e => {
    if (onError) {
      onError(e)
      setErr(true)
    }
    setLoading(false)
  }

  // TODO: 图片的预览功能

  const PreviewIcon = () => {
    return (
      <div className="kylin-image-preview-info">
        <Eye width={20} height={20} />
        <span>预览</span>
      </div>
    )
  }

  return (
    <Spin spinning={loading}>
      <span className="kylin-image-preview-container">
        <div className="kylin-image-preview-mask">
          {preview && !error && <PreviewIcon />}
        </div>
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
      </span>
    </Spin>
  )
})

export { Image }
