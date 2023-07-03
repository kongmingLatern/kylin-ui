import { render } from '@testing-library/react'
import { Badge } from '../Badge'

test('render', () => {
  const { container } = render(<Badge>Badge</Badge>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <span
      class="sc-gsTChe kRlmJt"
    >
      <span
        class="sc-bdfCkl dJNJR"
        color="white"
        shape="rounded"
        type="primary"
      >
        Badge
      </span>
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
        class="sc-gsTChe kRlmJt"
      >
        <span
          class="sc-bdfCkl fJzKJD"
          color="white"
          shape="rounded"
          type="secondary"
        >
          Badge
        </span>
      </span>
    `)
  })

  test('text', () => {
    const { container } = render(
      <Badge text="text">Badge</Badge>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="sc-gsTChe kRlmJt"
      >
        <sup
          class="sc-dlfmnT hcMoGJ"
          color="white"
          shape="rounded"
        >
          text
        </sup>
        <span
          class="sc-bdfCkl ddymHD"
          shape="rounded"
        >
          Badge
        </span>
      </span>
    `)
  })
})
