import { render } from '@testing-library/react'
import { Tag } from '../Tag'

test('render', () => {
  const { container } = render(<Tag>Tag</Tag>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <span
      class="kylin-tag-type-primary kylin-tag-shape-square kylin-tag-size-middle font-bold whitespace-nowrap"
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
        class="kylin-tag-type-secondary kylin-tag-shape-square kylin-tag-size-middle font-bold whitespace-nowrap"
      >
        Tag
      </span>
    `)
  })

  test('text', () => {
    const { container } = render(<Tag text="text">Tag</Tag>)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="kylin-tag-type-primary kylin-tag-shape-square kylin-tag-size-middle font-bold whitespace-nowrap"
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
        class="kylin-tag-type-primary kylin-tag-shape-square kylin-tag-size-middle font-bold whitespace-nowrap"
      >
        <span
          class="kylin-tag-icon-before"
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
        class="kylin-tag-type-primary kylin-tag-shape-square kylin-tag-size-middle font-bold whitespace-nowrap"
      >
        <span
          class="kylin-tag-icon-after"
        >
          <div>
            afterIcon
          </div>
        </span>
      </span>
    `)
  })
})
