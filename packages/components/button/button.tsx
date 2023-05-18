import React, {
  HTMLAttributes,
  useContext,
  useMemo,
} from 'react'
import classNames from 'classnames'
import { ButtonProps, CompoundedComponent } from './type'
import { extractThemeConfig } from '../../shared'
import { ThemeContext } from '../ThemeProvider'

const InternalButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (props, ref) => {
  /**============================= 设置 props ============================= */
  const {
    type = 'default',
    className,
    children,
    htmlType = 'button',
    onClick,
    ...rest
  } = props

  /**============================= 获取 当前主题色 | 自定义主题  ============================= */
  const { theme = {} } = useContext(ThemeContext)

  const shortcuts = useMemo(
    () => extractThemeConfig(theme, 'button', type),
    [theme]
  )

  /**============================= 设置 className ============================= */

  const classes = classNames(
    // TODO: 判断 type 是否在预期之内
    {
      [`kylin-btn-${type}`]: type,
    },
    className,
    shortcuts
  )
  let buttonNode = (
    <button
      type={htmlType}
      className={classes}
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  )
  return buttonNode
}
/**============================= 设置 Button ============================= */
const Button = React.forwardRef<
  HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
  ButtonProps
>(InternalButton as any)

// Button.__KYLIN_BUTTON = true

export { Button }
