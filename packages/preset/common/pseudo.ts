export const presetPseudoOption: any = ['hover']

export function registerPseudoModule({ hover }) {
  return {
    [`hover:bg-${hover}-700`]: hover,
  }
}
