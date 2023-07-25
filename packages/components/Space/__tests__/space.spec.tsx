import { render } from '@testing-library/react'
import { Space } from '../Space'

test('render', () => {
  const { container } = render(<Space>123</Space>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      align="center"
      class="sc-dlfmnT GBcQr"
      direction="horizontal"
      justify="start"
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
        align="center"
        class="sc-dlfmnT GBcQr"
        direction="horizontal"
        justify="start"
      >
        <div
          class="kylin-space-item"
          style="margin-right: 2px;"
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
        class="sc-dlfmnT dBIvBc"
        direction="vertical"
        justify="start"
      >
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
        align="end"
        class="sc-dlfmnT gkqjTZ"
        direction="horizontal"
        justify="start"
      >
        <div
          class="kylin-space-item"
          style="margin-right: 8px;"
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
        align="center"
        class="sc-dlfmnT GBcQr"
        direction="horizontal"
        justify="start"
      >
        <div
          class="kylin-space-item"
          style="margin-right: 4px;"
        >
          <div>
            first
          </div>
        </div>
        <span
          class="sc-hKgJyM bSsMGA kylin-space-item-split"
          style="margin-right: 4px;"
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
        align="center"
        class="sc-dlfmnT GBcQr"
        direction="horizontal"
        justify="start"
        style="flex-wrap: wrap; margin-bottom: -8px;"
      >
        <div
          class="kylin-space-item"
          style="margin-right: 8px; padding-bottom: 8px;"
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
  test('justify', () => {
    const { container } = render(
      <Space justify="end">
        <div>end1</div>
        <div>end2</div>
      </Space>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        align="center"
        class="sc-dlfmnT gylfEU"
        direction="horizontal"
        justify="end"
      >
        <div
          class="kylin-space-item"
          style="margin-right: 8px;"
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
