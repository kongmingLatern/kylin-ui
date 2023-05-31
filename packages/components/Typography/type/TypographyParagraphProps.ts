import { BaseTypographyProps } from './BaseTypography'

export interface TypographyParagraphProps
  extends BaseTypographyProps {
  /**
   * @description 文本类型
   * @default false
   * @type boolean
   */
  type?: 'secondary' | 'success' | 'info' | 'error'
}
