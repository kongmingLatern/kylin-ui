import {
  getAddSuffixOffset,
  getBackground,
  getFontSize,
  getPaddingSize,
  getRadius,
  getWidthSize,
} from '../src'
import { theme } from '../src/theme'

describe('getBackground', () => {
  test('pass type should return type', () => {
    expect(getBackground({ type: 'primary' })).toBe(
      theme['type']['primary']
    )
  })

  test('pass gradient should return gradient', () => {
    expect(getBackground({ gradient: 'aquamarine' })).toBe(
      theme['gradient']['aquamarine']
    )
  })

  test('should return default theme', () => {
    expect(getBackground({})).toBe(theme['type']['default'])
  })

  test('should return background', () => {
    expect(getBackground({ background: 'red' })).toBe('red')
  })

  test('should return default background', () => {
    expect(
      getBackground({ background: null })
    ).toBeUndefined()
  })
})

describe('getPaddingSize', () => {
  test('should return number', () => {
    expect(getPaddingSize(10)).toBe('10px')
  })

  test('should return theme size', () => {
    expect(getPaddingSize('small')).toBe(
      theme['padding']['small']
    )
  })

  test('should return default theme size', () => {
    expect(getPaddingSize()).toBe(
      theme['padding']['middle']
    )
  })
})

describe('getWidthSize', () => {
  test('should return number', () => {
    expect(getWidthSize(10)).toBe('10px')
  })

  test('should return theme size', () => {
    expect(getWidthSize('small')).toBe(
      theme['width']['small']
    )
  })
})

describe('getRadius', () => {
  test('should return theme shape', () => {
    expect(getRadius('rounded')).toBe(
      theme['shape']['rounded']
    )
    expect(getRadius('square')).toBe(
      theme['shape']['square']
    )
    expect(getRadius('circle')).toBe(
      theme['shape']['circle']
    )
  })
})

describe('getFontSize', () => {
  test('should return theme fontSize', () => {
    expect(getFontSize('small')).toBe(
      theme['fontSize']['small']
    )
    expect(getFontSize('middle')).toBe(
      theme['fontSize']['middle']
    )
    expect(getFontSize('large')).toBe(
      theme['fontSize']['large']
    )
  })
})

describe('getAddSuffixOffset', () => {
  test('should return theme offset', () => {
    expect(getAddSuffixOffset(10)).toBe('10px')
  })
  test('pass a string number should return theme offset', () => {
    expect(getAddSuffixOffset('10')).toBe(10)
  })

  test('pass a string should return string', () => {
    expect(getAddSuffixOffset('10px')).toBe('10px')
  })
})
