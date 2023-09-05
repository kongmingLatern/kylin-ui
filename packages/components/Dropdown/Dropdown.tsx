import React from 'react'
import { DropdownProps } from './type'
import classNames from 'classnames'
import { MenuContainer, MenuItemContainer } from './styled'
import './css/index.scss'
import { Space } from '../Space'

const InternalDropdown: React.ForwardRefRenderFunction<
  HTMLDivElement,
  DropdownProps
> = props => {
  const { menu = [], children } = props

  const child = React.Children.only(
    children
  ) as React.ReactElement<any>

  const DropdownTrigger = ({ children }) =>
    React.cloneElement(
      child,
      {
        className: classNames(
          child.props.className,
          'kylin-dropdown'
        ),
        style: { position: 'relative' },
      },
      [child.props.children, children]
    )

  return (
    <DropdownTrigger>
      <MenuContainer className="kylin-dropdown-menu">
        {menu.map(i => (
          <MenuItemContainer type={i.type} key={i.key}>
            <Space size={2} align={'center'}>
              {i?.icon}
              <span>{i.label}</span>
            </Space>
          </MenuItemContainer>
        ))}
      </MenuContainer>
    </DropdownTrigger>
  )
}

const Dropdown = React.forwardRef(InternalDropdown)

if (process.env.NODE_ENV !== 'production') {
  Dropdown.displayName = 'Dropdown'
}
export { Dropdown }
