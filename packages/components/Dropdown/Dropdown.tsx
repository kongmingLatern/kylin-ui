import React, { Fragment } from 'react'
import { DropdownProps } from './type'

const InternalDropdown: React.ForwardRefRenderFunction<
  HTMLDivElement,
  DropdownProps
> = (props, ref) => {
  const { menu = [], children } = props

  function Children() {
    return <div className="relative">{children}</div>
  }

  const MenuList = menu.map(i => (
    <div key={i.key}>
      {i?.icon}
      <span>{i.label}</span>
    </div>
  ))

  return <Children></Children>
}

const Dropdown = React.forwardRef(InternalDropdown)

if (process.env.NODE_ENV !== 'production') {
  Dropdown.displayName = 'Dropdown'
}
export { Dropdown }
