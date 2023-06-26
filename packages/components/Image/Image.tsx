import React, { useEffect, useState } from 'react'
import { ImageProps } from './type'
import { Spin } from '@components/Spin'
import classNames from 'classnames'
import {
  Eye,
  Minus,
  Plus,
  RotateCcw,
  X,
} from '@packages/icon'
import { Space } from '@components/Space'
import { GetHandler, GetImageIconsHandler } from './helpers'
import { ImageTools as Tools } from './helpers/const'
import { Keyboard } from '@kylin-ui/shared'

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

  const { handleOnError, handleOnLoad } = GetHandler({
    setLoading,
    setErr,
    onError,
    onLoad,
  })

  const { handleClick } = GetImageIconsHandler({
    setPreviewVisible,
  })

  const classes = classNames({
    ['kylin-image-preview']: preview,
  })

  const PreviewText = () => {
    return (
      <div className="kylin-image-preview-info">
        <Eye width={20} height={20} />
        <span>预览</span>
      </div>
    )
  }

  // TODO: 图片的预览功能 animation
  const openPreview = () => {
    const ImagePreview = () => {
      useEffect(() => {
        function registerEscEvent(e) {
          if (e.key === Keyboard.ESCAPE) {
            setPreviewVisible(false)
          }
        }

        window.addEventListener('keydown', registerEscEvent)

        return () => {
          window.removeEventListener(
            'keydown',
            registerEscEvent
          )
        }
      }, [])

      // 将图片的地址传递给一个新的组件，这个组件是一个弹窗，弹窗中展示图片
      const ImageCover = () => {
        return (
          <img
            className={'kylin-image-preview-cover'}
            src={src}
            alt={alt}
          />
        )
      }
      const ImageTools = () => {
        const ImageToolIcons = [
          <Plus width={30} key={Tools.PLUS} />,
          <Minus width={30} key={Tools.MINUS} />,
          <RotateCcw width={30} key={Tools.ROTATE_CCW} />,
          <X width={30} key={Tools.CLOSE} />,
        ]

        return (
          <div className="kylin-image-preview-popup-tools">
            <Space
              size={32}
              style={{
                marginRight: '2rem',
              }}
            >
              {ImageToolIcons.map((item, key) => {
                return (
                  <span
                    className="kylin-image-preview-popup-tools-icon"
                    key={key}
                    onClick={() => handleClick(item.key)}
                  >
                    {item}
                  </span>
                )
              })}
            </Space>
          </div>
        )
      }

      return (
        <div className="kylin-image-preview-popup">
          <ImageTools />
          <div className="kylin-image-preview-popup-container">
            <ImageCover />
          </div>
        </div>
      )
    }

    return <ImagePreview />
  }

  return (
    <>
      <Spin spinning={loading}>
        <span className="kylin-image-preview-container">
          {preview && (
            <div
              className="kylin-image-preview-mask"
              onClick={() => setPreviewVisible(true)}
            >
              {!error && <PreviewText />}
            </div>
          )}
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
