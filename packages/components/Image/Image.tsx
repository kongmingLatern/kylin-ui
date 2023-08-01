import React, { useEffect, useState } from 'react'
import { ImageProps } from './type'
import { Spin } from '@components/Spin'
import { Space } from '@components/Space'
import { Keyboard } from '@kylin-ui/shared'
import {
  Eye,
  Minus,
  Plus,
  RotateCcw,
  X,
} from '@packages/icon'
import {
  GetHandler,
  GetImageIconsHandler,
  ImageTools as Tools,
} from './helpers'
import {
  ImagePreviewContainer,
  ImagePreviewCover,
  ImagePreviewInfo,
  ImagePreviewMask,
  ImagePreviewPopup,
  ImagePreviewPopupTools,
  ImagePreviewPopupToolsIcon,
  ImagePreviewPopupContainer,
} from './styled'

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

  const PreviewText = () => {
    return (
      <ImagePreviewInfo>
        <Eye width={20} height={20} />
        <span>预览</span>
      </ImagePreviewInfo>
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
          <ImagePreviewCover
            id={'kylin-image-preview-cover'}
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
          <ImagePreviewPopupTools>
            <Space
              size={32}
              style={{
                marginRight: '2rem',
              }}
            >
              {ImageToolIcons.map((item, key) => {
                return (
                  <ImagePreviewPopupToolsIcon
                    key={key}
                    onClick={() => handleClick(item.key)}
                  >
                    {item}
                  </ImagePreviewPopupToolsIcon>
                )
              })}
            </Space>
          </ImagePreviewPopupTools>
        )
      }

      return (
        <ImagePreviewPopup>
          <ImageTools />
          <ImagePreviewPopupContainer>
            <ImageCover />
          </ImagePreviewPopupContainer>
        </ImagePreviewPopup>
      )
    }

    return <ImagePreview />
  }

  return (
    <>
      <Spin spinning={loading}>
        <ImagePreviewContainer>
          {preview && (
            <ImagePreviewMask
              onClick={() => setPreviewVisible(true)}
            >
              {!error && <PreviewText />}
            </ImagePreviewMask>
          )}
          <img
            src={src}
            width={width}
            height={height}
            alt={alt}
            onLoad={handleOnLoad}
            onError={handleOnError}
            ref={ref}
            style={{
              display: loading ? 'none' : 'block',
              objectFit: 'cover',
            }}
            {...rest}
          />
        </ImagePreviewContainer>
      </Spin>
      {previewVisible && openPreview()}
    </>
  )
})

export { Image }
