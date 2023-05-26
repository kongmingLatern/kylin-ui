import React, {
  HTMLAttributes,
  useContext,
  useMemo,
} from 'react'
import classNames from 'classnames'
import { ButtonProps, CompoundedComponent } from './type'
import { ThemeContext } from '../ThemeProvider'
import { useStyle } from '@kylin-ui/hooks'
import {
  extractThemeConfig,
  omit,
  excludePreset,
} from '@kylin-ui/shared'

const InternalButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (props, ref) => {
  /**============================= 设置 props ============================= */
  const {
    type = 'default',
    shape,
    block,
    ghost = false,
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
  /**============================= 注入预设(preset)配置  ============================= */
  const preset = process.env.KYLIN_CONFIG?.preset
  // TODO: Distinguish the preset and custom
  const presetClass = useStyle(preset, rest)

  // Omit the props which is not needed
  const restProps = omit(rest, excludePreset(preset))

  /**============================= 设置 className ============================= */

  const classes = classNames(
    // TODO: 判断 type 是否在预期之内
    {
      [`kylin-btn-${type}`]: !ghost && type,
      [`kylin-btn-shape-${shape}`]: shape,
      [`kylin-btn-block`]: block,
      [`kylin-btn-ghost`]: ghost,
      // FLAG: 经过处理后的 Unocss 样式
      ...presetClass,
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
