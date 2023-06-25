import { ImageTools } from './const'

export function GetHandler({
  onLoad,
  onError,
  setLoading,
  setErr,
}) {
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

  return {
    handleOnLoad,
    handleOnError,
  }
}

export function GetImageIconsHandler({
  setPreviewVisible,
}) {
  let count = 0
  const limitCount = 5
  const handleClick = key => {
    const dom = document.querySelector(
      '#kylin-image_preview_cover'
    ) as any
    switch (key) {
      case ImageTools.PLUS:
        ++count > limitCount && (count = limitCount)
        transformPreviewSize()
        break
      case ImageTools.MINUS:
        --count < 0 && (count = 0)
        transformPreviewSize()
        break
      case ImageTools.ROTATE_CCW:
        break
      case ImageTools.CLOSE:
        if (setPreviewVisible) {
          setPreviewVisible(false)
        }
        break
      default:
        break
    }

    function transformPreviewSize() {
      if (dom && count <= limitCount) {
        dom.style.transform = `translate3d(${
          0.25 * count
        }px, 0px, 0px) scale3d(${1 + 0.5 * count}, ${
          1 + 0.5 * count
        }, 1) rotate(0deg)`
      }
    }
  }
  return {
    handleClick,
  }
}
