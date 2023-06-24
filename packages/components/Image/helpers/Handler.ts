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
