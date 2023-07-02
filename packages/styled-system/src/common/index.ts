import { theme as Theme } from '@packages/theme/src'

export function getBackground({
  type,
  gradient,
}: {
  type?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
  gradient?: 'aquamarine' | 'orange' | 'red' | 'blue'
}) {
  if (gradient) {
    return Theme[gradient]
  }
  return Theme[type!] ?? Theme['default']
}

export function getSize(
  size?: 'small' | 'middle' | 'large'
) {
  return size ? Theme[size] : Theme['middle']
}

export function getWidthHeightSize(
  size?: 'small' | 'middle' | 'large' | number
) {
  const sizeMap = {
    small: 'widthSmall',
    middle: 'widthMiddle',
    large: 'widthLarge',
  }

  if (typeof size === 'number') {
    return `${size}px`
  }

  return size
    ? Theme[sizeMap[size]]
    : Theme[sizeMap['middle']]
}

export function getRadius(
  shape?: 'circle' | 'rounded' | 'square'
) {
  return shape ? Theme[shape] : Theme['square']
}

export function getMargin({ position }) {
  return position === 'before' ? '0 4px 0 0' : '0 0 0 4px'
}

export function getFontSize(
  size?: 'small' | 'middle' | 'large' | number
) {
  const sizeMap = {
    small: 'fontSmall',
    middle: 'fontMiddle',
    large: 'fontLarge',
  }

  if (typeof size === 'number') {
    return `${size}px`
  }

  return size
    ? Theme[sizeMap[size]]
    : Theme[sizeMap['middle']]
}
