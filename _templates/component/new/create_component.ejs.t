---
to: packages/components/<%= name %>/<%= name %>.tsx
---
import React from "react"
import { <%= name %>Props } from "./type"

const <%= name %> = React.forwardRef<HTMLDivElement, <%= name %>Props>(
  (props, ref) => {
     const {children} = props
     return <div ref={ref}>{children}</div>
    }
)


export { <%= name %> }
