import React from 'react'

interface BasicPropsWithTagName
  extends React.HTMLAttributes<HTMLDivElement> {
  tagName: 'header' | 'footer' | 'main' | 'section'
}

function generator({ tagName, displayName }) {
  return BasicComponent => {
    const Adapter = React.forwardRef<
      HTMLElement,
      React.HTMLAttributes<HTMLDivElement>
    >((props, ref) => (
      <BasicComponent
        ref={ref}
        {...props}
        tagName={tagName}
      />
    ))
    return Adapter
  }
}

const BasicLayout = React.forwardRef<
  HTMLElement,
  BasicPropsWithTagName
>((props, ref) => {
  const { tagName: TagName, ...rest } = props

  return <TagName ref={ref} {...rest}></TagName>
})

const Layout = generator({
  tagName: 'section',
  displayName: 'Layout',
})(BasicLayout)

const Header = generator({
  tagName: 'header',
  displayName: 'Header',
})(BasicLayout)

const Footer = generator({
  tagName: 'footer',
  displayName: 'Footer',
})(BasicLayout)

const Content = generator({
  tagName: 'main',
  displayName: 'Content',
})(BasicLayout)

export { Header, Footer, Content }

export default Layout
