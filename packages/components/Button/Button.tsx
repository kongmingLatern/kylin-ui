import React, {
  HTMLAttributes,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import classNames from 'classnames'
import {
  ButtonProps,
  CompoundedComponent,
  Loading,
  LoadingConfigType,
} from './type'
import { ThemeContext } from '../ThemeProvider'
import { useStyle } from '@kylin-ui/hooks'
import { extractThemeConfig } from '@kylin-ui/shared'
import LoadingIcon from './LoadingIcon'
import { getLoadingConfig } from './getLoadingConfig'
import { GroupSizeContext } from './ButtonGroup'
import { ButtonContainer } from './styled'

const InternalButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (props, ref) => {
  /**============================= 设置 props ============================= */
  const {
    type = 'default',
    shape = 'rounded',
    block,
    size = useContext(GroupSizeContext),
    beforeIcon,
    afterIcon,
    disabled = false,
    ghost = false,
    loading = false,
    className,
    children,
    ...rest
  } = props

  const loadingOrDelay = useMemo<LoadingConfigType>(
    () => getLoadingConfig(loading),
    [loading]
  )

  const [innerLoading, setLoading] = useState<Loading>(
    loadingOrDelay.loading
  )
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
  // const restProps = omit(rest, excludePreset(preset))

  /**============================= 设置 className ============================= */

  // const classes = classNames(
  //   // TODO: 判断 type 是否在预期之内
  //   {
  //     [`kylin-btn-${type}`]: !ghost && type,
  //     [`kylin-btn-shape-${shape}`]: shape,
  //     [`kylin-btn-size-${size}`]: size,
  //     [`kylin-btn-block`]: block,
  //     [`kylin-btn-ghost`]: ghost,
  //     [`kylin-btn-loading`]: innerLoading,
  //     [`kylin-btn-disabled`]: disabled || innerLoading,
  //     // FLAG: 经过处理后的 Unocss 样式
  //     ...presetClass,
  //   },
  //   className,
  //   shortcuts ? shortcuts : ''
  // )

  useEffect(() => {
    let delayTimer: NodeJS.Timer | null = null
    if (loadingOrDelay.delay > 0) {
      delayTimer = setTimeout(() => {
        delayTimer = null
        setLoading(true)
      }, loadingOrDelay.delay)
    } else {
      setLoading(loadingOrDelay.loading)
    }

    function cleanupTimer() {
      if (delayTimer) {
        clearTimeout(delayTimer)
        delayTimer = null
      }
    }

    return cleanupTimer
  }, [loadingOrDelay])

  const BeforeIcon = () =>
    beforeIcon ? <span>{beforeIcon}</span> : null

  const AfterIcon = () =>
    afterIcon ? <span>{afterIcon}</span> : null

  const IconNode = ({ children }) => {
    return (
      <>
        <BeforeIcon />
        <LoadingIcon loading={!!innerLoading} />
        <span className="mx-[0.5rem]">{children}</span>
        <AfterIcon />
      </>
    )
  }

  const handleClick = (
    e: React.MouseEvent<
      HTMLButtonElement | HTMLAnchorElement,
      MouseEvent
    >
  ) => {
    const { onClick } = props
    if (innerLoading || disabled) {
      e.preventDefault()
      return
    }
    ;(
      onClick as React.MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement
      >
    )?.(e)
  }

  const buttonNode = (
    <ButtonContainer
      type={type}
      size={size}
      displayblock={block ? 1 : 0}
      ghost={ghost ? 1 : 0}
      shape={shape}
      loading={Number(!!innerLoading)}
      ref={ref}
      onClick={handleClick}
      disabled={Number(disabled || innerLoading)}
      className={classNames(
        className,
        presetClass,
        shortcuts
      )}
      {...rest}
    >
      <IconNode>
        {ghost ? <span>{children}</span> : children}
      </IconNode>
    </ButtonContainer>
  )

  return buttonNode
}
const Button = React.forwardRef<
  HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
  ButtonProps
>(InternalButton as any)
// Button.__KYLIN_BUTTON = true

export { Button }
