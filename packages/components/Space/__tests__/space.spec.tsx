import { render } from '@testing-library/react'
import { Space } from '../Space'

test('render', () => {
  const { container } = render(<Space>123</Space>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="kylin-space-justify-start kylin-space-horizontal kylin-space-align-center"
      style="column-gap: 8px; row-gap: 8px; display: flex;"
    >
      <div
        class="kylin-space-item"
      >
        123
      </div>
    </div>
  `)
})

describe('props', () => {
  test('size', () => {
    const { container } = render(
      <Space size={2}>
        <div>first</div>
        <div>secord</div>
      </Space>
    )
    expect(container.firstChild).toMatchInlineSnapshot(
      `
      <div
        class="kylin-space-justify-start kylin-space-horizontal kylin-space-align-center"
        style="column-gap: 2px; row-gap: 2px; display: flex;"
      >
        <div
          class="kylin-space-item"
        >
          <div>
            first
          </div>
        </div>
        <div
          class="kylin-space-item"
        >
          <div>
            secord
          </div>
        </div>
      </div>
    `
    )
  })
  test('direction', () => {
    const { container } = render(
      <Space direction="vertical">
        <div>first</div>
        <div>secord</div>
      </Space>
    )
    expect(container.firstChild).toMatchInlineSnapshot(
      `
      <div
        class="kylin-space-justify-start kylin-space-vertical"
        style="column-gap: 8px; row-gap: 8px; display: flex;"
      >
        <div
          class="kylin-space-item"
        >
          <div>
            first
          </div>
        </div>
        <div
          class="kylin-space-item"
        >
          <div>
            secord
          </div>
        </div>
      </div>
    `
    )
  })
  test('align', () => {
    const { container } = render(
      <Space align="end">
        <div>first</div>
        <div>secord</div>
      </Space>
    )
    expect(container.firstChild).toMatchInlineSnapshot(
      `
      <div
        class="kylin-space-justify-start kylin-space-horizontal kylin-space-align-end"
        style="column-gap: 8px; row-gap: 8px; display: flex;"
      >
        <div
          class="kylin-space-item"
        >
          <div>
            first
          </div>
        </div>
        <div
          class="kylin-space-item"
        >
          <div>
            secord
          </div>
        </div>
      </div>
    `
    )
  })
  test('split', () => {
    const { container } = render(
      <Space split>
        <div>first</div>
        <div>secord</div>
      </Space>
    )
    expect(container.firstChild).toMatchInlineSnapshot(
      `
      <div
        class="kylin-space-justify-start kylin-space-horizontal kylin-space-align-center"
        style="column-gap: 8px; row-gap: 8px; display: flex;"
      >
        <div
          class="kylin-space-item"
        >
          <div>
            first
          </div>
        </div>
        <span
          class="kylin-space-item-split"
        />
        <div
          class="kylin-space-item"
        >
          <div>
            secord
          </div>
        </div>
      </div>
    `
    )
  })
  test('wrap', () => {
    const { container } = render(
      <Space wrap>
        <div>first</div>
        <div>secord</div>
      </Space>
    )
    expect(container.firstChild).toMatchInlineSnapshot(
      `
      <div
        class="kylin-space-justify-start kylin-space-horizontal kylin-space-align-center"
        style="flex-wrap: wrap; column-gap: 8px; row-gap: 8px; display: flex;"
      >
        <div
          class="kylin-space-item"
        >
          <div>
            first
          </div>
        </div>
        <div
          class="kylin-space-item"
        >
          <div>
            secord
          </div>
        </div>
      </div>
    `
    )
  })
  test('justify', () => {
    const { container } = render(
      <Space justify="end">
        <div>end1</div>
        <div>end2</div>
      </Space>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-space-justify-end kylin-space-horizontal kylin-space-align-center"
        style="column-gap: 8px; row-gap: 8px; display: flex;"
      >
        <div
          class="kylin-space-item"
        >
          <div>
            end1
          </div>
        </div>
        <div
          class="kylin-space-item"
        >
          <div>
            end2
          </div>
        </div>
      </div>
    `)
  })
})
