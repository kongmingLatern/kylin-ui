import { render } from '@testing-library/react'
import { Paragraph } from '../Paragraph'
test('renders Paragraph component', () => {
  const { container } = render(<Paragraph />)
  expect(container.firstChild).toMatchInlineSnapshot(
    '<p />'
  )
})

describe('TypographyParagraph', () => {
  test('props -> default', () => {
    const { container } = render(
      <Paragraph>Default Title</Paragraph>
    )
    expect(container.firstChild).toMatchInlineSnapshot(
      `
      <p>
        Default Title
      </p>
    `
    )
  })
  test('props -> code', () => {
    const { container } = render(
      <Paragraph code>Title2</Paragraph>
    )
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
      <Paragraph deleteLine>Text2</Paragraph>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <p
        class="kylin-typography-deleteLine"
      >
        Text2
      </p>
    `)
  })

  test('props -> underline', () => {
    const { container } = render(
      <Paragraph underline>Text2</Paragraph>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <p
        class="kylin-typography-underline"
      >
        Text2
      </p>
    `)
  })
  test('props -> italic', () => {
    const { container } = render(
      <Paragraph italic>Text2</Paragraph>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <p
        class="kylin-typography-italic"
      >
        Text2
      </p>
    `)
  })
  test('props -> strong', () => {
    const { container } = render(
      <Paragraph strong>Text2</Paragraph>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <p
        class="kylin-typography-strong"
      >
        Text2
      </p>
    `)
  })
  test('props -> mark', () => {
    const { container } = render(
      <Paragraph mark>Text2</Paragraph>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <p
        class="kylin-typography-mark"
      >
        Text2
      </p>
    `)
  })
  test('props -> disabled', () => {
    const { container } = render(
      <Paragraph disabled>Text2</Paragraph>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <p
        class="kylin-typography-disabled"
      >
        Text2
      </p>
    `)
  })

  test('props -> ellipsis', () => {
    const { container } = render(
      <Paragraph ellipsis>Text2</Paragraph>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <p
        class="kylin-typography-ellipsis"
      >
        Text2
      </p>
    `)
  })
  test('props -> intent', () => {
    const { container } = render(
      <Paragraph indent>Text2</Paragraph>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <p
        class="kylin-typography-indent"
      >
        Text2
      </p>
    `)
  })
  test('props -> type', () => {
    const { container } = render(
      <Paragraph type="secondary">Text2</Paragraph>
    )
    expect(container.firstChild).toMatchInlineSnapshot(
      `
      <p
        class="kylin-typography-type-secondary"
      >
        Text2
      </p>
    `
    )
  })
})
