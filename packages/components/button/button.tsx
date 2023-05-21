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
    color,
    bg,
    hover,
    className,
    children,
    htmlType = 'button',
    onClick,
    ...rest
  } = props

  /**============================= 获取 当前主题色 | 自定义主题  ============================= */
  const { theme = {} } = useContext(ThemeContext)

  // TODO: You can use different scheme about user's choose
  // 1. startdard: user can only use the theme which is defined by uno.css(Less css user can use)
  // 2. medium: user can use the theme which is defined by uno.css(More css user can use)
  // 3. large: user can use the theme which is defined by uno.css(All css user can use)
  const shortcuts = useMemo(
    () => extractThemeConfig(theme, 'button', type),
    [theme]
  )

  /**============================= 设置 className ============================= */

  const classes = classNames(
    // TODO: 判断 type 是否在预期之内
    {
      [`kylin-btn-${type}`]: type,
      [`text-${color}-500`]: color,
      [`bg-${bg}-500`]: bg,
      [`hover:bg-${hover}-700`]: hover || bg,
    },
    className,
    shortcuts ? shortcuts : ''
  )
  let buttonNode = (
    <button
      type={htmlType}
      className={classes}
      onClick={onClick}
      {...rest}
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
