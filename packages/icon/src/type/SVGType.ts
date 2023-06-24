import { SVGProps } from 'react'

export interface SVGType<T> extends SVGProps<T> {
  width?: number
  height?: number
  key?: any
  fill?: string
  focusable?: boolean
}
