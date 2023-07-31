import React from 'react'
import { InputNumberProps } from './type'
import {
  InputContainer,
  InputNumberComponent,
  Prefix,
  RelativeContainer,
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
    <InputContainer
      className={className}
      tabIndex={1}
      shape={shape}
      {...rest}
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
      <div className="flex flex-col">
        <ArrowUp width={20} height={15} color={'#ccc'} />
        <ArrowDown width={20} height={15} color={'#ccc'} />
      </div>
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  )
}

const InputNumber = React.forwardRef(InternalInputNumber)

if (process.env.NODE_ENV !== 'production') {
  InputNumber.displayName = 'InputNumber'
}
export { InputNumber }
