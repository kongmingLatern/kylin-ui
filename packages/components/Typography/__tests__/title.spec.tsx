import { render, screen } from '@testing-library/react'
import Title from '../Title'
test('renders Title component', () => {
  render(<Title />)
  const linkElement = screen.getByText(
    /Typography Component/i
  )
  expect(linkElement.firstChild).toMatchInlineSnapshot(
    'Typography Component'
  )
})
