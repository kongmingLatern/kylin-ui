import { render } from '@testing-library/react'
import { Badge } from '../Badge'

test('render', () => {
  const { container } = render(<Badge>Badge</Badge>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <span
      class="relative inline-flex"
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
        class="relative inline-flex"
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
        class="relative inline-flex"
      >
        <sup
          style="position: absolute; top: -1rem; right: -1.5rem; height: 20px; z-index: 10;"
        >
          <span
            class="kylin-badge kylin-badge-type-primary kylin-badge-shape-square whitespace-nowrap relative"
            style="color: white; height: 20px;"
          >
            text
          </span>
        </sup>
        Badge
      </span>
    `)
  })
})
