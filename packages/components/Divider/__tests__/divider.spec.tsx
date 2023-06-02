import { render } from '@testing-library/react'
import { Divider } from '../Divider'

test('render', () => {
  const { container } = render(<Divider />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="kylin-divider kylin-divider-horizontal"
      role="separator"
    />
  `)
})

describe('Divider Props', () => {
  test('type', () => {
    const { container } = render(
      <Divider type="vertical" />
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-divider kylin-divider-vertical"
        role="separator"
      />
    `)
  })
  test('orientation', () => {
    const { container } = render(
      <Divider orientation="left" />
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-divider kylin-divider-horizontal"
        role="separator"
      />
    `)
  })
  test('orientationMargin', () => {
    const { container } = render(
      <Divider orientationMargin="0">Divider</Divider>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-divider kylin-divider-with-text-center kylin-divider-horizontal"
        role="separator"
      >
        <span
          class="kylin-divider-inner-text"
        >
          Divider
        </span>
      </div>
    `)
  })
  test('orientation', () => {
    const { container } = render(<Divider dashed />)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-divider kylin-divider-dashed kylin-divider-horizontal"
        role="separator"
      />
    `)
  })
  test('plain', () => {
    const { container } = render(
      <Divider plain>This is a plain text</Divider>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-divider kylin-divider-with-text-center kylin-divider-plain kylin-divider-horizontal"
        role="separator"
      >
        <span
          class="kylin-divider-inner-text"
        >
          This is a plain text
        </span>
      </div>
    `)
  })
})
