import { render } from '@testing-library/react'
import Text from '../Text'
test('renders Title component', () => {
  const { container } = render(<Text />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div>
      <h1>
        Text Component
      </h1>
    </div>
  `)
})
