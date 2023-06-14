import { render } from '@testing-library/react'
import { Spin } from '../Spin'

test('render', () => {
  const { container } = render(<Spin>123</Spin>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="kylin-spin-nested-loading"
    >
      <div>
        <div
          aria-busy="true"
          aria-live="polite"
          class="kylin-spin-spinning"
        />
      </div>
      <div
        class="kylin-spin-container kylin-spin-blur"
      >
        123
      </div>
    </div>
  `)
})

describe('props', () => {
  test('size', () => {
    const { container } = render(
      <Spin size="small">waiting</Spin>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-spin-nested-loading"
      >
        <div>
          <div
            aria-busy="true"
            aria-live="polite"
            class="kylin-spin-sm kylin-spin-spinning"
          />
        </div>
        <div
          class="kylin-spin-container kylin-spin-blur"
        >
          waiting
        </div>
      </div>
    `)
  })

  test('tip', () => {
    const { container } = render(<Spin tip="123">tip</Spin>)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-spin-nested-loading"
      >
        <div>
          <div
            aria-busy="true"
            aria-live="polite"
            class="kylin-spin-spinning kylin-spin-show-text"
          >
            <div
              class="kylin-spin-text"
            >
              123
            </div>
          </div>
        </div>
        <div
          class="kylin-spin-container kylin-spin-blur"
        >
          tip
        </div>
      </div>
    `)
  })

  test('spinning', () => {
    const { container } = render(
      <Spin spinning={false}>Text</Spin>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-spin-nested-loading"
      >
        <div
          class="kylin-spin-container"
        >
          Text
        </div>
      </div>
    `)
  })
})
