import React from 'react'
import { InputProps } from './type'
import {
  InputComponent,
  InputContainer,
  Prefix,
  Suffix,
} from './styled'
import { Search } from '@packages/icon'
import { omit } from '@packages/shared'

const InternalInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (props, ref) => {
  const {
    className,
    placeholder,
    prefix,
    suffix = props?.enterSearch ? (
      <Search width={20} height={20} />
    ) : null,
    onChange,
    ...rest
  } = props

  const handleChange = e => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  const restProps = omit(props, ['enterSearch'])

  return (
    <InputContainer className={className} tabIndex={1}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <InputComponent
        ref={ref}
        placeholder={placeholder}
        onChange={handleChange}
        {...restProps}
      />
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  )
}

const Input = React.forwardRef(InternalInput)

if (process.env.NODE_ENV !== 'production') {
  Input.displayName = 'Input'
}
export { Input }
