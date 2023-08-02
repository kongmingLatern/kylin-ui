import { render } from '@testing-library/react'
import { Title } from '../Title'
test.skip('renders Title component', () => {
  const { container } = render(<Title />)
  expect(container.firstChild).toMatchInlineSnapshot(
    `
    <h1
      class="kylin-typography-title-h1"
    />
  `
  )
})

describe.skip('TypographyTitle', () => {
  test('props -> level -> default ', () => {
    const { container } = render(
      <Title>Default Title</Title>
    )
    expect(container.firstChild).toMatchInlineSnapshot(
      `
      <h1
        class="kylin-typography-title-h1"
      >
        Default Title
      </h1>
    `
    )
  })
  test('props -> level -> custom', () => {
    const { container } = render(
      <Title level={2}>Title2</Title>
    )
    expect(container.firstChild).toMatchInlineSnapshot(
      `
      <h2
        class="kylin-typography-title-h2"
      >
        Title2
      </h2>
    `
    )
  })
  test('props -> type', () => {
    const { container } = render(
      <Title type="secondary">Title2</Title>
    )
    expect(container.firstChild).toMatchInlineSnapshot(
      `
      <h1
        class="kylin-typography-title-h1 kylin-typography-type-secondary"
      >
        Title2
      </h1>
    `
    )
  })
  test('props -> code', () => {
    const { container } = render(<Title code>Title2</Title>)
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
      <Title level={2} deleteLine>
        Title2
      </Title>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <h2
        class="kylin-typography-title-h2 kylin-typography-deleteLine"
      >
        Title2
      </h2>
    `)
  })

  test('props -> underline', () => {
    const { container } = render(
      <Title level={2} underline>
        Title2
      </Title>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <h2
        class="kylin-typography-title-h2 kylin-typography-underline"
      >
        Title2
      </h2>
    `)
  })
  test('props -> italic', () => {
    const { container } = render(
      <Title level={2} italic>
        Title2
      </Title>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <h2
        class="kylin-typography-title-h2 kylin-typography-italic"
      >
        Title2
      </h2>
    `)
  })
  test('props -> strong', () => {
    const { container } = render(
      <Title level={2} strong>
        Title2
      </Title>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <h2
        class="kylin-typography-title-h2 kylin-typography-strong"
      >
        Title2
      </h2>
    `)
  })
  test('props -> mark', () => {
    const { container } = render(
      <Title level={2} mark>
        Title2
      </Title>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <h2
        class="kylin-typography-title-h2 kylin-typography-mark"
      >
        Title2
      </h2>
    `)
  })
  test('props -> disabled', () => {
    const { container } = render(
      <Title level={2} disabled>
        Title2
      </Title>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <h2
        class="kylin-typography-title-h2 kylin-typography-disabled"
      >
        Title2
      </h2>
    `)
  })

  test('props -> ellipsis', () => {
    const { container } = render(
      <Title level={2} ellipsis>
        Title2
      </Title>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <h2
        class="kylin-typography-title-h2 kylin-typography-ellipsis"
      >
        Title2
      </h2>
    `)
  })
})
