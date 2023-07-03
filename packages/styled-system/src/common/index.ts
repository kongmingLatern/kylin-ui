import { theme as Theme } from '../theme'

export function getBackground({
  type,
  gradient,
  bgColor,
}: {
  type?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
  gradient?: 'aquamarine' | 'orange' | 'red' | 'blue'
  bgColor?: string | null
}) {
  if (bgColor === null) return
  if (bgColor) {
    return bgColor
  } else if (gradient) {
    return Theme['gradient'][gradient]
  }
  return Theme['type'][type!] ?? Theme['type']['default']
}

export function getPaddingSize(
  size?: 'small' | 'middle' | 'large' | number
) {
  if (typeof size === 'number') {
    return `${size}px`
  }

  return size
    ? Theme['padding'][size]
    : Theme['padding']['middle']
}

export function getBadgeSize(
  size?: 'small' | 'middle' | 'large' | number
) {
  if (typeof size === 'number') {
    return `${size}px`
  }

  return size
    ? Theme['width'][size]
    : Theme['width']['middle']
}

export function getWidthSize(
  size?: 'small' | 'middle' | 'large' | number
) {
  if (typeof size === 'number') {
    return `${size}px`
  }

  return size
    ? Theme['width'][size]
    : Theme['width']['middle']
}

export function getRadius(
  shape?: 'circle' | 'rounded' | 'square'
) {
  return shape
    ? Theme['shape'][shape]
    : Theme['shape']['square']
}

export function getMargin({ position }) {
  return position === 'before' ? '0 4px 0 0' : '0 0 0 4px'
}

export function getFontSize(
  size?: 'small' | 'middle' | 'large' | number
) {
  if (typeof size === 'number') {
    return `${size}px`
  }

  return size
    ? Theme['fontSize'][size]
    : Theme['fontSize']['middle']
}

export function getAddSuffixOffset(
  offset: number | string
) {
  if (typeof offset === 'number') {
    return `${offset}px`
  }
  return offset
}
