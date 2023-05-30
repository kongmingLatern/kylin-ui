import { BaseTypographyProps } from './BaseTypography'

export interface TypographyTextProps
  extends BaseTypographyProps {
  /**
   * @description 添加键盘样式
   * @default false
   * @type boolean
   */
  keyboard?: boolean

  /**
   * @description 文本类型
   * @default false
   * @type boolean
   */
  type?: 'secondary' | 'success' | 'info' | 'error'
}
