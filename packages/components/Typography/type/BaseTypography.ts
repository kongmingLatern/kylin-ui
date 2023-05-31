export interface BaseTypographyProps {
  /**
   * @description 子元素
   * @default -
   * @type React.ReactNode
   */
  _type?: 'TEXT' | 'TITLE' | 'PARAGRAPHY'
  /**
   * @description 子元素
   * @default -
   * @type React.ReactNode
   */
  children?: React.ReactNode
  /**
   * @description 添加代码样式
   * @default false
   * @type boolean
   */
  code?: boolean
  /**
   * @description 是否可拷贝
   * @default false
   * @type boolean
   */
  // TODO: Neet to add a icon for copy
  copyable?: boolean
  /**
   * @description 添加删除线
   * @default false
   * @type boolean
   */
  deleteLine?: boolean
  /**
   * @description 禁用文本
   * @default false
   * @type boolean
   */
  disabled?: boolean
  /**
   * @description 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等
   * @default false
   * @type boolean
   */
  ellipsis?: boolean
  /**
   * @description 添加标记样式
   * @default false
   * @type boolean
   */
  mark?: boolean
  /**
   * @description 添加下划线
   * @default false
   * @type boolean
   */
  underline?: boolean
  /**
   * @description 加粗
   * @default false
   * @type boolean
   */
  strong?: boolean
  /**
   * @description 斜体
   * @default false
   * @type boolean
   */
  italic?: boolean

  /**
   * @description 点击 Title 时的回调
   * @default false
   * @type boolean
   */
  onClick?: React.MouseEventHandler<HTMLElement>
}
