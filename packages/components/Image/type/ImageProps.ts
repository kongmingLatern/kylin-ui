interface ImageCallback {
  onLoad?: () => void
  onError?: () => void
}

export interface ImageProps extends ImageCallback {
  src?: string
  alt?: string
  width?: number
  height?: number
  className?: string
  children?: React.ReactNode
}
