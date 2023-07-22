---
to: packages/components/<%= name %>/<%= name %>.tsx
---
import React from "react"
import { <%= name %>Props } from "./type"

const Internal<%= name %>: React.ForwardRefRenderFunction<
  HTMLDivElement,
  <%= name %>Props
> = (props, ref) => {
   const { children } = props
   return <div ref={ref}>{children}</div>
}

const <%= name %> = React.forwardRef(Internal<%= name %>)

if (process.env.NODE_ENV !== 'production') {
  <%= name %>.displayName = '<%= name %>';
}
export { <%= name %> }
