import { render } from '@testing-library/react'
import { Row } from '../Row'

test('render', () => {
  const { container } = render(<Row>123123</Row>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="kylin-grid-row kylin-grid-justify-start kylin-grid-align-start kylin-grid-wrap-start"
      style="margin: 0px 0px 0px 0px;"
    >
      123123
    </div>
  `)
})
describe('test props', () => {
  test('gutter', () => {
    const { container } = render(
      <Row gutter={2}>123123</Row>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-grid-row kylin-grid-justify-start kylin-grid-align-start kylin-grid-wrap-start"
        style="margin: 0px -1px 0px -1px;"
      >
        123123
      </div>
    `)
  })
  test('gutter -> array', () => {
    const { container } = render(
      <Row gutter={[2, 3]}>123123</Row>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-grid-row kylin-grid-justify-start kylin-grid-align-start kylin-grid-wrap-start"
        style="margin: -1.5px -1px -1.5px -1px;"
      >
        123123
      </div>
    `)
  })

  test('wrap', () => {
    const { container } = render(
      <Row wrap="start">This is a row</Row>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-grid-row kylin-grid-justify-start kylin-grid-align-start kylin-grid-wrap-start"
        style="margin: 0px 0px 0px 0px;"
      >
        This is a row
      </div>
    `)
  })
  test('justify', () => {
    const { container } = render(
      <Row justify="center">This is a row</Row>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-grid-row kylin-grid-justify-center kylin-grid-align-start kylin-grid-wrap-start"
        style="margin: 0px 0px 0px 0px;"
      >
        This is a row
      </div>
    `)
  })
  test('align', () => {
    const { container } = render(
      <Row align="start">This is a row</Row>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-grid-row kylin-grid-justify-start kylin-grid-align-start kylin-grid-wrap-start"
        style="margin: 0px 0px 0px 0px;"
      >
        This is a row
      </div>
    `)
  })
})
