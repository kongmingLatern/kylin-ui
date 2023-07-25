import { RowProps } from '@components/Grid/type'
import { theme as Theme } from '../theme'
import { SpaceProps } from '@components/Space/type'
import { CoverProps } from '@components/Card/type'

/**
 * @description 根据type, gradient, background 获取背景色
 * @param `type`
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
 * @param gradient 'aquamarine' | 'orange' | 'red' | 'blue'
 * @param background  string | null
 * @returns
      `type`: {
        `default`: '#5123f7',
        `primary`: '#6e0b75',
        `secondary`: '#006597',
        `success`: '#36d399',
        `info`: '#3abff8',
        `disabled`: '#bdc3c7',
        `warning`: '#e67e22',
        `danger`: '#e74c3c',
      },

      `gradient`: {
        `aquamarine`:
          'linear-gradient(45deg, #00d2ff 0%, #3a7bd5 100%)',
        `blue`: 'linear-gradient(45deg, #00d2ff 0%, #3a7bd5 100%)',
        `orange`:
          'linear-gradient(45deg, #f2994a 0%, #f2c94c 100%)',
        `red`: 'linear-gradient(45deg, #2193b0 0%, #6dd5ed 100%)',
      },

 */
export function getBackground({
  type,
  gradient,
  background,
}: {
  type?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
  gradient?: 'aquamarine' | 'orange' | 'red' | 'blue'
  background?: string | null
}) {
  if (background === null) return
  if (background) {
    return background
  } else if (gradient) {
    return Theme['gradient'][gradient]
  }
  return Theme['type'][type!] ?? Theme['type']['default']
}

/**
 * @description 根据size获取 padding
 * @param size  number | 'small' | 'middle' | 'large'
 * @returns
    `small`: '0 0.4rem',
    `middle`: '0 0.6rem',
    `large`: '0 0.8rem',
 */
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

/**
 * @description 根据size获取宽度
 * @param size  number | 'small' | 'middle' | 'large'
 * @returns
 *  small: '2.4rem',
    middle: '3.2rem',
    large: '4rem',
 */
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

/**
 * @description 根据 shape 获取 radius
 * @param shape  'circle' | 'rounded' | 'square'
 * @returns
    `square`: 0,
    `rounded`: '0.25rem',
    `circle`: '50%',
 */
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
/**
 * @description 根据size获取 fontSize
 * @param size  number | 'small' | 'middle' | 'large'
 * @returns
    `small`: '1rem',
    `middle`: '1.2rem',
    `large`: '1.4rem',
 */
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

/**
 * @description 根据 offset 获取 偏移量
 * @param offset number | string
 * @returns
 *  number: `${offset}px`
 *  string: offset
 */
export function getAddSuffixOffset(
  offset: number | string
) {
  if (typeof offset === 'number') {
    return `${offset}px`
  } else if (/^\d+$/.test(offset)) {
    return Number(offset)
  }
  return offset
}

/**
 *
 * @param name 根据 name 获取 justify 和 align
 * @returns 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
 */
export function formatBy(
  name:
    | RowProps['justify']
    | (RowProps['align'] | 'baseline')
) {
  if (!name) return
  if (name === 'start' || name === 'end')
    return `flex-${name}`
  return name
}

/**
 *
 * @param name 根据 wrap 获取 flex-wrap
 * @returns 'wrap' | 'wrap-reverse'
 *
 * */
export function getWrap(wrap: RowProps['wrap']) {
  if (!wrap) return
  if (wrap === 'reverse') {
    return 'wrap-reverse'
  }
  return wrap
}

export function getFlexDirection(
  direction: SpaceProps['direction']
) {
  if (!direction) return
  if (direction === 'vertical') {
    return 'column'
  }
  return 'row'
}

export function getCoverPosition(
  position?: CoverProps['position']
) {
  if (!position) return
  switch (position) {
    case 'top':
      return 'column'
    case 'bottom':
      return 'column-reverse'
    case 'left':
      return 'row'
    case 'right':
      return 'row-reverse'
    default:
      return 'row'
  }
}

export function getCoverWidth(width: CoverProps['size']) {
  switch (width) {
    case 'small':
      return '30rem'
    case 'medium':
      return '50rem'
    case 'large':
      return '70rem'
    default:
      return 'auto'
  }
}
