import React, { useState } from 'react'
import { ImageProps } from './type'
import { Spin } from '@components/Spin'
import classNames from 'classnames'
import { Eye } from '@packages/icon'
import { Space } from '@components/Space'

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
  const [previewVisible, setPreviewVisible] =
    useState(false)
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

  // 监听 window 的 esc 事件，如果按下了 esc 键，就关闭预览
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      setPreviewVisible(false)
    }
  })

  const PreviewIcon = () => {
    return (
      <div className="kylin-image-preview-info">
        <Eye width={20} height={20} />
        <span>预览</span>
      </div>
    )
  }

  // TODO: 图片的预览功能 animation
  const openPreview = () => {
    // 将图片的地址传递给一个新的组件，这个组件是一个弹窗，弹窗中展示图片
    const ImageCover = () => {
      return (
        <img
          src={src}
          alt={alt}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '80%',
            maxHeight: '80%',
            minWidth: '20%',
            minHeight: '20%',
            objectFit: 'cover',
          }}
        />
      )
    }

    const ImageTools = () => {
      return (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '3rem',
            justifyContent: 'end',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
          }}
        >
          <Space
            size={32}
            style={{
              marginRight: '2rem',
            }}
          >
            {['放大', '缩小', '旋转', '关闭'].map(item => {
              return (
                <span
                  key={item}
                  style={{
                    display: 'block',
                    width: '2rem',
                    height: '2rem',
                    lineHeight: '2rem',
                    color: 'white',
                    cursor: 'pointer',
                  }}
                >
                  {item}
                </span>
              )
            })}
          </Space>
        </div>
      )
    }

    const ImagePreview = () => {
      return (
        <div
          className="kylin-image-preview-popup"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
          }}
        >
          <ImageTools />
          <ImageCover />
        </div>
      )
    }

    return <ImagePreview />
  }

  return (
    <>
      <Spin spinning={loading}>
        <span className="kylin-image-preview-container">
          <div
            className="kylin-image-preview-mask"
            onClick={() => setPreviewVisible(true)}
          >
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
      {previewVisible && openPreview()}
    </>
  )
})

export { Image }
