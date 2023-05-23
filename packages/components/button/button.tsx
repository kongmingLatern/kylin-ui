import React, {
  HTMLAttributes,
  useContext,
  useMemo,
} from 'react'
import classNames from 'classnames'
import { ButtonProps, CompoundedComponent } from './type'
import { ThemeContext } from '../ThemeProvider'
import { useStyle } from '@kylin/hooks'
import { extractThemeConfig, omit } from '@kylin-ui/shared'
import {
  colorModule,
  paddingModule,
  marginModule,
  presetColorOption,
  presetPaddingOption,
  presetMarginOption,
  pseudoModule,
  presetPseudoOption,
} from '@kylin-ui/preset'

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

  // TODO: You can use different scheme about user's choose
  // 1. preset: user can only use the theme which is defined by uno.css(Less css user can use)
  // 2. medium: user can use the theme which is defined by uno.css(More css user can use)
  // 3. large: user can use the theme which is defined by uno.css(All css user can use)
  const shortcuts = useMemo(
    () => extractThemeConfig(theme, 'button', type),
    [theme]
  )
  /**============================= 注入预设(preset)配置  ============================= */

  const style = useStyle('base', {
    ...colorModule(rest),
    ...paddingModule(rest),
    ...marginModule(rest),
    ...pseudoModule(rest),
  })

  // Omit the props which is not needed
  const restProps = omit(rest, [
    ...presetPaddingOption,
    ...presetMarginOption,
    ...presetColorOption,
    ...presetPseudoOption,
  ])

  /**============================= 设置 className ============================= */

  const classes = classNames(
    // TODO: 判断 type 是否在预期之内
    {
      [`kylin-btn-${type}`]: type,
      // FLAG: 优化 color bg hover 的判断
      ...style,
    },
    className,
    shortcuts ? shortcuts : ''
  )

  let buttonNode = (
    <button
      type={htmlType}
      className={classes}
      onClick={onClick}
      {...restProps}
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
