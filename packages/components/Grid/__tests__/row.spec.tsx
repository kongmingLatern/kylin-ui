import { render } from '@testing-library/react'
import { Row } from '../Row'

test.skip('render', () => {
  const { container } = render(<Row>123123</Row>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      align="start"
      class="sc-bdfCkl hrJvUs"
      justify="start"
      style="margin: 0px 0px 0px 0px;"
      wrap="wrap"
    >
      123123
    </div>
  `)
})
describe.skip('test props', () => {
  test('gutter', () => {
    const { container } = render(
      <Row gutter={2}>123123</Row>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        align="start"
        class="sc-bdfCkl hrJvUs"
        justify="start"
        style="margin: 0px -1px 0px -1px;"
        wrap="wrap"
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
        align="start"
        class="sc-bdfCkl hrJvUs"
        justify="start"
        style="margin: -1.5px -1px -1.5px -1px;"
        wrap="wrap"
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
        align="start"
        class="sc-bdfCkl euDqBY"
        justify="start"
        style="margin: 0px 0px 0px 0px;"
        wrap="start"
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
        align="start"
        class="sc-bdfCkl cgshCR"
        justify="center"
        style="margin: 0px 0px 0px 0px;"
        wrap="wrap"
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
        align="start"
        class="sc-bdfCkl hrJvUs"
        justify="start"
        style="margin: 0px 0px 0px 0px;"
        wrap="wrap"
      >
        This is a row
      </div>
    `)
  })
})
