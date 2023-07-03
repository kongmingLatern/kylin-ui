import { render } from '@testing-library/react'
import { Badge } from '../Badge'

test('render', () => {
  const { container } = render(<Badge>Badge</Badge>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <span
      class="sc-gsTChe kRlmJt"
    >
      <span
        class="sc-bdfCkl jFQSPq"
        color="white"
        shape="square"
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
          class="sc-bdfCkl dByLQs"
          color="white"
          shape="square"
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
          class="sc-dlfmnT dlEILS"
          color="white"
          shape="square"
        >
          text
        </sup>
        <span
          class="sc-bdfCkl kKZXSc"
          shape="square"
        >
          Badge
        </span>
      </span>
    `)
  })
})
