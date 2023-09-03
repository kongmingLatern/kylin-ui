import { BaseTypographyProps } from './BaseTypography'

type LevelType = 1 | 2 | 3 | 4 | 5 | 6

export interface TypographyTitleProps
  extends BaseTypographyProps {
  /**
   * @description 重要程度，相当于 h1、h2、h3、h4、h5
   * @default 1
   * @type 1 | 2 | 3 | 4 | 5 | 6
   */
  level?: LevelType

  type?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'info'
    | 'error'
    | 'description'
}
