import { BaseTypographyProps } from './BaseTypography'

export interface TypographyParagraphProps
  extends BaseTypographyProps {
  /**
   * @description 文本类型
   * @default false
   * @type boolean
   */
  type?: 'secondary' | 'success' | 'info' | 'error'
  /**
   * @description 首行缩进
   * @default false
   * @type boolean
   */
  indent?: boolean
}
