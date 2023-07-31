import React from 'react'
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
    className,
    placeholder,
    shape = 'rounded',
    prefix,
    suffix,
    onChange,
    onPressEnter,
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
    <InputContainer
      className={className}
      tabIndex={1}
      shape={shape}
    >
      {prefix && <Prefix>{prefix}</Prefix>}
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
      <ArrowIcon>
        <ArrowUp
          width={20}
          height={15}
          color={'#ccc'}
          style={{
            borderBottom: '1px solid #d9d9d9',
          }}
        />
        <ArrowDown width={20} height={15} color={'#ccc'} />
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
