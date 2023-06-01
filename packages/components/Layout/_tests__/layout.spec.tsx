import { render } from '@testing-library/react'
import { Content, Footer, Header } from '../layout'

test('render', () => {
  const { container } = render(
    <>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </>
  )

  expect(container).toMatchInlineSnapshot(`
    <div>
      <header>
        Header
      </header>
      <main>
        Content
      </main>
      <footer>
        Footer
      </footer>
    </div>
  `)
})
