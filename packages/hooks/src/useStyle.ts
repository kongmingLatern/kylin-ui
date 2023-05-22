type styleName = 'preset' | 'medium' | 'large'
export function useStyle(name: styleName, options) {
  if (name === 'preset') {
    const { color, bg, hover } = options
    return {
      [`text-${color}-500`]: color,
      [`bg-${bg}-500`]: bg,
      [`hover:bg-${hover}-700`]: hover,
    }
  }
}
