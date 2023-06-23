interface ImageCallback {
  onLoad?: (event: Event) => void
  onError?: (event: Event) => void
}

export interface ImageProps extends ImageCallback {
  src?: string
  alt?: string
  width?: number
  height?: number
  preview?: boolean
  className?: string
  children?: React.ReactNode
}
