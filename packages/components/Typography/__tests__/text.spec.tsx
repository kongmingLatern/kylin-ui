import { render } from '@testing-library/react'
import { Text } from '../Text'
test('renders Text component', () => {
  const { container } = render(<Text />)
  expect(container.firstChild).toMatchInlineSnapshot('<span />')
})

describe('TypographyText', () => {
  test('props -> default', () => {
    const { container } = render(<Text>Default Title</Text>)
    expect(container.firstChild).toMatchInlineSnapshot(
      `
      <span>
        Default Title
      </span>
    `
    )
  })
  test('props -> code', () => {
    const { container } = render(<Text code>Title2</Text>)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <code
        class="kylin-typography-code"
      >
        Title2
      </code>
    `)
  })
  test('props -> delete', () => {
    const { container } = render(
      <Text deleteLine>Text2</Text>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="kylin-typography-deleteLine"
      >
        Text2
      </span>
    `)
  })

  test('props -> underline', () => {
    const { container } = render(
      <Text underline>Text2</Text>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="kylin-typography-underline"
      >
        Text2
      </span>
    `)
  })
  test('props -> italic', () => {
    const { container } = render(<Text italic>Text2</Text>)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="kylin-typography-italic"
      >
        Text2
      </span>
    `)
  })
  test('props -> strong', () => {
    const { container } = render(<Text strong>Text2</Text>)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="kylin-typography-strong"
      >
        Text2
      </span>
    `)
  })
  test('props -> mark', () => {
    const { container } = render(<Text mark>Text2</Text>)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="kylin-typography-mark"
      >
        Text2
      </span>
    `)
  })
  test('props -> disabled', () => {
    const { container } = render(
      <Text disabled>Text2</Text>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="kylin-typography-disabled"
      >
        Text2
      </span>
    `)
  })

  test('props -> ellipsis', () => {
    const { container } = render(
      <Text ellipsis>Text2</Text>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="kylin-typography-ellipsis"
      >
        Text2
      </span>
    `)
  })
})
