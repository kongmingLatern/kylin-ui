import React, { useState } from 'react'
import { InputNumberProps } from './type'
import {
  ArrowIcon,
  InputContainer,
  InputNumberComponent,
  Prefix,
  Suffix,
} from './styled'
import { omit } from '@packages/shared'
import { ArrowDown, ArrowUp } from '@packages/icon'

const InternalInputNumber: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputNumberProps
> = (props, ref) => {
  const {
    width,
    height = '30px',
    className,
    placeholder,
    shape = 'rounded',
    prefix,
    suffix,
    onChange,
    onPressEnter,
  } = props

  const [hover, setHover] = useState(false)

  const handleChange = e => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  const restProps = omit(props, [
    'prefix',
    'suffix',
    'onChange',
    'onPressEnter',
  ])

  return (
    <InputContainer
      className={className}
      tabIndex={1}
      shape={shape}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {prefix && <Prefix>{prefix}</Prefix>}
      <InputNumberComponent
        type={'number'}
        ref={ref}
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
        onMouseOver={() => setHover(true)}
        onKeyDown={e => {
          if (!onPressEnter) return
          if (e.keyCode === 13) {
            onPressEnter(e, e.target.value)
          }
        }}
        onMouseLeave={() => setHover(false)}
        {...restProps}
      />
      <ArrowIcon width={width} height={height}>
        {hover && (
          <>
            <ArrowUp
              width={20}
              color={'#ccc'}
              style={{
                height: '50%',
                borderBottom: '1px solid #d9d9d9',
              }}
            />
            <ArrowDown
              width={20}
              color={'#ccc'}
              style={{
                height: '50%',
              }}
            />
          </>
        )}
      </ArrowIcon>
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  )
}

const InputNumber = React.forwardRef(InternalInputNumber)

if (process.env.NODE_ENV !== 'production') {
  InputNumber.displayName = 'InputNumber'
}
export { InputNumber }
