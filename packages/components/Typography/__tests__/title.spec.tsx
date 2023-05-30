import { render } from '@testing-library/react'
import { Title } from '../Title'
test('renders Title component', () => {
  const { container } = render(<Title />)
  expect(container.firstChild).toMatchInlineSnapshot(
    `
    <h1
      class="kylin-typography-title"
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
        class="kylin-typography-title"
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
        class="kylin-typography-title"
      >
        Title2
      </h2>
    `
    )
  })
  test('props -> code', () => {
    const { container } = render(
      <Title level={2} code>
        Title2
      </Title>
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
      <Title level={2} deleteLine>
        Title2
      </Title>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <h2
        class="kylin-typography-title kylin-typography-deleteLine"
      >
        Title2
      </h2>
    `)
  })
})
