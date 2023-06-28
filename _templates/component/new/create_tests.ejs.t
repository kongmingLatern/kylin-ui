---
to: packages/components/<%= name %>/__tests__/<%= name %>.tsx
---
import { render } from '@testing-library/react'
import { <%= name %> } from '@components/<%= name %>'

test('render', () => {
  const { container } = render(<<%= name %>>There are some text</<%= name %>>)
  expect(container.firstChild).toMatchInlineSnapshot()
})
