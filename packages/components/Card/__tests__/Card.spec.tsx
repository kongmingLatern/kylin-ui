import { render } from '@testing-library/react'
import { Card } from '../Card'

test('render', () => {
  const { container } = render(<Card>Card</Card>)
  expect(container.firstChild).toMatchInlineSnapshot()
})
