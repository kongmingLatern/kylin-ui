import { render } from '@testing-library/react'
import { Badge } from '../Badge'

test('render', () => {
  const { container } = render(<Badge>Badge</Badge>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <span
      class="kylin-badge-type-primary kylin-badge-shape-square kylin-badge-size-middle font-bold whitespace-nowrap"
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
        class="kylin-badge-type-secondary kylin-badge-shape-square kylin-badge-size-middle font-bold whitespace-nowrap"
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
        class="kylin-badge-type-primary kylin-badge-shape-square kylin-badge-size-middle font-bold whitespace-nowrap"
      >
        text
      </span>
    `)
  })
})
