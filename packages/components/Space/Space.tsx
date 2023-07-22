import classNames from 'classnames'
import React from 'react'
import Item from './Item'
import { toArray } from '@kylin-ui/shared'
import { SpaceSize, SpaceProps } from './type'

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
}

export const SpaceContext = React.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
})

function getNumberSize(size: SpaceSize) {
  return typeof size === 'string'
    ? spaceSize[size]
    : size || 0
}

const Space = React.forwardRef<HTMLDivElement, SpaceProps>(
  (props, ref) => {
    const {
      size = 'small',
      justify = 'start',
      direction = 'horizontal',
      align,
      style,
      split,
      wrap,
      children,
      className,
      ...rest
    } = props

    const [horizontalSize, verticalSize] = React.useMemo(
      () =>
        (
          (Array.isArray(size) ? size : [size, size]) as [
            SpaceSize,
            SpaceSize
          ]
        ).map(item => getNumberSize(item)),
      [size]
    )

    const childNodes = toArray(children, {
      keepEmpty: true,
    })

    const mergedAlign =
      align === undefined && direction === 'horizontal'
        ? 'center'
        : align

    const cls = classNames(
      {
        [`kylin-space-justify-${justify}`]: justify,
        [`kylin-space-${direction}`]: direction,
        [`kylin-space-align-${mergedAlign}`]: mergedAlign,
      },
      className
    )

    const itemClassName = `kylin-space-item`

    let latestIndex = 0

    const nodes = childNodes.map((child, i) => {
      if (child !== null && child !== undefined) {
        latestIndex = i
      }

      const key =
        (child && child.key) || `${itemClassName}-${i}`

      return (
        <Item
          className={'kylin-space-item'}
          key={key}
          direction={direction}
          index={i}
          marginDirection={'marginRight'}
          split={split}
          wrap={wrap}
        >
          {child}
        </Item>
      )
    })

    const spaceContext = React.useMemo(
      () => ({
        horizontalSize,
        verticalSize,
        latestIndex,
      }),
      [horizontalSize, verticalSize, latestIndex]
    )

    if (childNodes.length === 0) {
      return null
    }

    const gapStyle: React.CSSProperties = {}

    if (wrap) {
      gapStyle.flexWrap = 'wrap'
    }
    // TODO: 这里需要兼容低版本浏览器 flex 布局
    gapStyle.columnGap = horizontalSize
    gapStyle.rowGap = verticalSize

    return (
      <div
        ref={ref}
        className={cls === '' ? undefined : cls}
        style={{
          ...gapStyle,
          display: 'flex',
          ...style,
        }}
        {...rest}
      >
        <SpaceContext.Provider value={spaceContext}>
          {nodes}
        </SpaceContext.Provider>
      </div>
    )
  }
)

if (process.env.NODE_ENV !== 'production') {
  Space.displayName = 'Space'
}

export { Space }
