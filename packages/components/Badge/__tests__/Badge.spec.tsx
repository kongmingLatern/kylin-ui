import { render } from '@testing-library/react'
import { Badge } from '../Badge'

test('render', () => {
  const { container } = render(<Badge>Badge</Badge>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <span
      class="kylin-badge-primary kylin-badge-middle"
    >
      Badge
    </span>
  `)
})

describe('type', () => {
  test('type', () => {
    const { container } = render(
      <Badge type="secondary">Badge</Badge>
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="kylin-badge-secondary kylin-badge-middle"
      >
        Badge
      </span>
    `)
  })

  test('text', () => {
    const { container } = render(
      <Badge text="text">Badge</Badge>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="kylin-badge-primary kylin-badge-middle"
      >
        text
      </span>
    `)
  })
})
