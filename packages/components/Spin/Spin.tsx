import React from 'react'
import { SpinProps } from './type'
import { debounce } from 'throttle-debounce'
import LoadingIcon from '@components/Button/LoadingIcon'
import {
  SpinContainer,
  SpinContainerClass,
  SpinDot,
  SpinNestPattern,
  SpinText,
} from './styled'

const InternalSpin: React.ForwardRefRenderFunction<
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

  const spinElement: React.ReactNode = (
    <SpinContainer
      id={'kylin-spin'}
      $spinning={spinning}
      style={style}
      className={className}
      aria-live="polite"
      aria-busy={spinning}
      {...rest}
    >
      {spinning && (
        <SpinDot>
          <LoadingIcon loading={spinning} />
        </SpinDot>
      )}
      {tip && isNestedPattern ? (
        <SpinText size={size}>{tip}</SpinText>
      ) : null}
    </SpinContainer>
  )

  if (isNestedPattern) {
    return (
      <SpinNestPattern
        className={wrapperClassName}
        {...rest}
      >
        {spinning && (
          <div key={'loading'} ref={ref}>
            {spinElement}
          </div>
        )}
        <SpinContainerClass
          $spinning={spinning}
          key="container"
        >
          {children}
        </SpinContainerClass>
      </SpinNestPattern>
    )
  }
  return spinElement
}

export const Spin = React.forwardRef(InternalSpin)
