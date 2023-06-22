import React from 'react'
import classNames from 'classnames'
import { SpinProps } from './type'
import { debounce } from 'throttle-debounce'
import LoadingIcon from '@components/Button/LoadingIcon'

export const Spin: React.ForwardRefRenderFunction<
  HTMLImageElement,
  SpinProps
> = (props, ref) => {
  const {
    spinning: customSpinning = true,
    className,
    delay = 0,
    wrapperClassName,
    size = 'default',
    tip,
    indicator,
    style,
    children,
    ...rest
  } = props

  function shouldDelay(
    spinning?: boolean,
    delay?: number
  ): boolean {
    return !!spinning && !!delay && !isNaN(Number(delay))
  }

  React.useEffect(() => {
    if (customSpinning) {
      const showSpinning = debounce(delay, () => {
        setSpinning(true)
      })
      showSpinning()
      return () => {
        showSpinning?.cancel?.()
      }
    }

    setSpinning(false)
  }, [delay, customSpinning])

  const [spinning, setSpinning] = React.useState<boolean>(
    () =>
      customSpinning && !shouldDelay(customSpinning, delay)
  )

  const isNestedPattern = React.useMemo<boolean>(
    () => typeof children !== 'undefined',
    [children]
  )

  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      !tip || isNestedPattern,
      'Spin',
      '`tip` only work in nest pattern.'
    )
  }

  const spinClassName = classNames(
    'kylin-spin',
    {
      [`kylin-spin-sm`]: size === 'small',
      [`kylin-spin-lg`]: size === 'large',
      [`kylin-spin-spinning`]: spinning,
      [`kylin-spin-show-text`]: !!tip,
    },
    className
  )

  const containerClassName = classNames(
    `kylin-spin-container`,
    {
      [`kylin-spin-blur`]: spinning,
    }
  )

  const spinElement: React.ReactNode = (
    <div
      {...rest}
      style={style}
      className={spinClassName}
      aria-live="polite"
      aria-busy={spinning}
    >
      {spinning && (
        <div className="kylin-spin-dot">
          <LoadingIcon loading={spinning} />
        </div>
      )}
      {tip && isNestedPattern ? (
        <div className={`kylin-spin-text`}>{tip}</div>
      ) : null}
    </div>
  )

  if (isNestedPattern) {
    return (
      <div
        {...rest}
        className={classNames(
          `kylin-spin-nested-loading`,
          wrapperClassName
        )}
      >
        {spinning && <div key="loading">{spinElement}</div>}
        <div className={containerClassName} key="container">
          {children}
        </div>
      </div>
    )
  }
  return spinElement
}
