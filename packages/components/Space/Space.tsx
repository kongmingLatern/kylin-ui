import React from 'react'
import Item from './Item'
import { toArray } from '@kylin-ui/shared'
import { SpaceSize, SpaceProps } from './type'
import { useFlexGapSupport } from '@kylin-ui/hooks'
import { SpaceContainer } from './styled'

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
}

export const SpaceContext = React.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false,
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

    const supportFlexGap = useFlexGapSupport()

    const childNodes = toArray(children, {
      keepEmpty: true,
    })

    const mergedAlign =
      align === undefined && direction === 'horizontal'
        ? 'center'
        : align

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
        supportFlexGap,
      }),
      [
        horizontalSize,
        verticalSize,
        latestIndex,
        supportFlexGap,
      ]
    )

    if (childNodes.length === 0) {
      return null
    }

    const gapStyle: React.CSSProperties = {}

    if (wrap) {
      gapStyle.flexWrap = 'wrap'

      if (!supportFlexGap) {
        gapStyle.marginBottom = -verticalSize
      }
    }

    if (supportFlexGap) {
      gapStyle.columnGap = horizontalSize
      gapStyle.rowGap = verticalSize
    }

    return (
      <SpaceContainer
        ref={ref}
        justify={justify}
        align={mergedAlign}
        direction={direction}
        style={{
          ...gapStyle,
          ...style,
        }}
        {...rest}
      >
        <SpaceContext.Provider value={spaceContext}>
          {nodes}
        </SpaceContext.Provider>
      </SpaceContainer>
    )
  }
)

if (process.env.NODE_ENV !== 'production') {
  Space.displayName = 'Space'
}

export { Space }
