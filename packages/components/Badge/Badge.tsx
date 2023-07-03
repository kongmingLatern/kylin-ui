import { BadgeProps } from './type'
import React from 'react'
import {
  BadgeContainer,
  BadgeInner,
  SupContainer,
} from './styled'

export const InternalBadge: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  BadgeProps
> = (props, ref) => {
  const {
    type = 'primary',
    size = 'small',
    shape = 'circle',
    color = 'white',
    bgColor,
    gradient,
    text,
    offset,
    children,
    ...rest
  } = props

  return (
    <BadgeInner ref={ref} {...rest}>
      {text ? (
        <>
          <SupContainer
            offset={offset}
            color={color}
            bgColor={bgColor}
            shape={shape}
            size={size}
          >
            {text}
          </SupContainer>
          <BadgeContainer shape={shape} bgColor={null}>
            {children}
          </BadgeContainer>
        </>
      ) : (
        <BadgeContainer
          type={type}
          gradient={gradient}
          shape={shape}
          size={size}
          color={color}
          bgColor={bgColor}

          {...rest}
        >
          {children}
        </BadgeContainer>
      )}
    </BadgeInner>
  )
}

export const Badge = React.forwardRef<
  HTMLSpanElement,
  BadgeProps
>(InternalBadge)

if (process.env.NODE_ENV !== 'production') {
  Badge.displayName = 'Badge'
}
