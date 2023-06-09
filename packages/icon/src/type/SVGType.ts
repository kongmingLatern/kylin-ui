import { SVGProps } from 'react'

export interface SVGType<T> extends SVGProps<T> {
  width?: number
  height?: number
  fill?: string
  focusable?: boolean
}
