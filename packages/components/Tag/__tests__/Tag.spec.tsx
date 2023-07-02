import { render } from '@testing-library/react'
import { Tag } from '../Tag'

test('render', () => {
  const { container } = render(<Tag>Tag</Tag>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <span
      class="sc-bdfCkl bWAEPq"
    >
      Tag
    </span>
  `)
})

describe('type', () => {
  test('type', () => {
    const { container } = render(
      <Tag type="secondary">Tag</Tag>
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="sc-bdfCkl dhSdNH"
        type="secondary"
      >
        Tag
      </span>
    `)
  })

  test('text', () => {
    const { container } = render(<Tag text="text">Tag</Tag>)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="sc-bdfCkl bWAEPq"
      >
        text
      </span>
    `)
  })
  test('icon', () => {
    const { container } = render(
      <Tag beforeIcon={<div>beforeIcon</div>} />
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="sc-bdfCkl bWAEPq"
      >
        <span
          class="sc-gsTChe dBpwuc"
          position="before"
        >
          <div>
            beforeIcon
          </div>
        </span>
      </span>
    `)

    const { container: afterIconContainer } = render(
      <Tag afterIcon={<div>afterIcon</div>} />
    )
    expect(
      afterIconContainer.firstChild
    ).toMatchInlineSnapshot(`
      <span
        class="sc-bdfCkl bWAEPq"
      >
        <span
          class="sc-gsTChe YFaKI"
          position="after"
        >
          <div>
            afterIcon
          </div>
        </span>
      </span>
    `)
  })
})
