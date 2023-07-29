import React from 'react'
import { InputNumberProps } from './type'
import {
  InputNumberContainer,
  InputNumberComponent,
  Prefix,
  RelativeContainer,
  Suffix,
} from './styled'
import { omit } from '@packages/shared'

const InternalInputNumber: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputNumberProps
> = (props, ref) => {
  const {
    className,
    placeholder,
    shape = 'rounded',
    onChange,
    prefix,
    suffix,
    onPressEnter,
    ...rest
  } = props

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
    <>
      <InputNumberContainer
        className={className}
        tabIndex={1}
        shape={shape}
        {...rest}
      >
        {prefix && <Prefix>{prefix}</Prefix>}
        <RelativeContainer width={props?.width}>
          <InputNumberComponent
            type={'number'}
            ref={ref}
            className={className}
            placeholder={placeholder}
            onChange={handleChange}
            onKeyDown={e => {
              if (!onPressEnter) return
              if (e.keyCode === 13) {
                onPressEnter(e, e.target.value)
              }
            }}
            {...restProps}
          />
        </RelativeContainer>
        {suffix && <Suffix>{suffix}</Suffix>}
      </InputNumberContainer>
    </>
  )
}

const InputNumber = React.forwardRef(InternalInputNumber)

if (process.env.NODE_ENV !== 'production') {
  InputNumber.displayName = 'InputNumber'
}
export { InputNumber }
