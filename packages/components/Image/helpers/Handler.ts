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
  let rotate = 0
  const limitCount = 5
  const handleClick = key => {
    const dom = document.querySelector(
      '#kylin-image_preview_cover'
    ) as any
    switch (key) {
      case ImageTools.PLUS:
        transformPreviewSize(formatCount(ImageTools.PLUS))
        break
      case ImageTools.MINUS:
        transformPreviewSize(formatCount(ImageTools.MINUS))
        break
      case ImageTools.ROTATE_CCW:
        transformPreviewSize(count, ++rotate)
        break
      case ImageTools.CLOSE:
        if (setPreviewVisible) {
          setPreviewVisible(false)
        }
        break
      default:
        break
    }

    function formatCount(type: `${ImageTools}`) {
      type === ImageTools.PLUS
        ? ++count > limitCount && (count = limitCount)
        : type === ImageTools.MINUS
        ? --count < 0 && (count = 0)
        : count

      return count
    }

    function transformPreviewSize(count, rotate = 0) {
      if (dom && count <= limitCount) {
        dom.style.transform = `translate3d(${
          0.25 * count
        }px, 0px, 0px) scale3d(${1 + 0.5 * count}, ${
          1 + 0.5 * count
        }, 1) rotate(${rotate * 90}deg)`
      }
    }
  }
  return {
    handleClick,
  }
}
