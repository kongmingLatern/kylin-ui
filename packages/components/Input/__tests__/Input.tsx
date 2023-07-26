import { render } from '@testing-library/react'
import { Input } from '@components/Input'

test('render', () => {
  const { container } = render(<Input>There are some text</Input>)
  expect(container.firstChild).toMatchInlineSnapshot()
})
