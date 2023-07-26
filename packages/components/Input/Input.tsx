import React from 'react'
import { InputProps } from './type'
import {
  InputComponent,
  InputContainer,
  Prefix,
  Suffix,
} from './styled'

const InternalInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (props, ref) => {
  const {
    className,
    placeholder,
    prefix,
    suffix,
    onChange,
    ...rest
  } = props

  const handleChange = e => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <InputContainer className={className} tabIndex="1">
      {prefix && <Prefix>{prefix}</Prefix>}
      <InputComponent
        ref={ref}
        placeholder={placeholder}
        onChange={handleChange}
        {...rest}
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
