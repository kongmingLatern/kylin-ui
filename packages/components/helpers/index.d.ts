const buttonType = [
  'default',
  'primary',
  'secondary',
  'success',
  'info',
  'error',
  'ghost',
  'dashed',
  'link',
  'text',
] as const

const commonType = [
  'default',
  'primary',
  'secondary',
  'success',
  'info',
  'error',
  'disabled',
  'warning',
  'danger',
] as const

export type ButtonThemeType = (typeof buttonType)[number]
export type CommonThemeType = (typeof commonType)[number]
