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
  const handleClick = key => {
    switch (key) {
      case ImageTools.PLUS:
        break
      case ImageTools.MINUS:
        break
      case ImageTools.ROTATE_CCW:
        break
      case ImageTools.CLOSE:
        setPreviewVisible(false)
        break
      default:
        break
    }
  }
  return {
    handleClick,
  }
}
