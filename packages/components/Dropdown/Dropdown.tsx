import React from 'react'
import { DropdownProps } from './type'

const InternalDropdown: React.ForwardRefRenderFunction<
  HTMLDivElement,
  DropdownProps
> = (props, ref) => {
  const { children } = props
  return <div ref={ref}>{children}</div>
}

const Dropdown = React.forwardRef(InternalDropdown)

if (process.env.NODE_ENV !== 'production') {
  Dropdown.displayName = 'Dropdown'
}
export { Dropdown }
