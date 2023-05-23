export const presetPseudoOption: any = ['hover']

export function pseudoModule({ hover }: Partial<any>) {
  return {
    hover,
  }
}

export function dealPseudoModule({ hover }) {
  return {
    [`hover:bg-${hover}-700`]: hover,
  }
}
