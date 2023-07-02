import { theme as Theme } from '@packages/theme/src'

export function getBackground({ gradient, type }) {
  if (gradient) {
    return Theme[gradient]
  }
  return Theme[type!] ?? Theme['default']
}

export function getSize({ size }) {
  return size ? Theme[size] : Theme['middle']
}

export function getRadius({ shape }) {
  return shape ? Theme[shape] : Theme['square']
}
