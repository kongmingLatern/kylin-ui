import { render } from '@testing-library/react'
import { Title } from '../Title'
test('renders Title component', () => {
  const { container } = render(<Title />)
  expect(container.firstChild).toMatchInlineSnapshot(
    `
    <h1
      class="kylin-typography-title-h1"
    />
  `
  )
})

describe('TypographyTitle', () => {
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
})
