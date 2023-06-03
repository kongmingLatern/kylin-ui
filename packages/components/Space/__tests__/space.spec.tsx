import { render } from '@testing-library/react'
import { Space } from '../Space'

test('render', () => {
  const { container } = render(<Space>123</Space>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="kylin-space-align-center"
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
        class="kylin-space-align-center"
      >
        <div
          class="kylin-space-item"
          style="margin-left: 2px;"
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
      <div>
        <div
          class="kylin-space-item"
          style="margin-bottom: 8px;"
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
        class="kylin-space-align-end"
      >
        <div
          class="kylin-space-item"
          style="margin-left: 8px;"
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
        class="kylin-space-align-center"
      >
        <div
          class="kylin-space-item"
          style="margin-left: 4px;"
        >
          <div>
            first
          </div>
        </div>
        <span
          class="kylin-space-item-split"
          style="margin-left: 4px;"
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
        class="kylin-space-align-center"
        style="flex-wrap: wrap;"
      >
        <div
          class="kylin-space-item"
          style="margin-left: 8px; padding-bottom: 8px;"
        >
          <div>
            first
          </div>
        </div>
        <div
          class="kylin-space-item"
          style="padding-bottom: 8px;"
        >
          <div>
            secord
          </div>
        </div>
      </div>
    `
    )
  })
})
