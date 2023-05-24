export function generatePaddingOrMargin(target): string[] {
  return Array.from({ length: 10 }, (_, i) => i + 1).map(
    item => `${target}-${item}`
  )
}
