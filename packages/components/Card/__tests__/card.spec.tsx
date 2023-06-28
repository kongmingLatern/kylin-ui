import { render } from '@testing-library/react'
import { Card } from '@components/Card'

test('render', () => {
  const { container } = render(<Card>This is a card</Card>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="kylin-card-container flex flex-col p-2"
    >
      <main
        class="kylin-card-content"
      >
        <h1
          class="kylin-typography-title-h1 kylin-typography-strong"
        />
        This is a card
      </main>
      <footer />
    </div>
  `)
})

describe('Props', () => {
  test('Header', () => {
    const { container } = render(
      <Card Header={<div>Header</div>}>This is a card</Card>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-card-container flex flex-col p-2"
      >
        <main
          class="kylin-card-content"
        >
          <h1
            class="kylin-typography-title-h1 kylin-typography-strong"
          >
            <div>
              Header
            </div>
          </h1>
          This is a card
        </main>
        <footer />
      </div>
    `)
  })
  test('Content', () => {
    const { container } = render(
      <Card Content={<div>Content</div>}>
        This is a card
      </Card>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-card-container flex flex-col p-2"
      >
        <main
          class="kylin-card-content"
        >
          <h1
            class="kylin-typography-title-h1 kylin-typography-strong"
          />
          <div>
            Content
          </div>
        </main>
        <footer />
      </div>
    `)
  })
  test('Footer', () => {
    const { container } = render(
      <Card Footer={<div>Footer</div>}>This is a card</Card>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-card-container flex flex-col p-2"
      >
        <main
          class="kylin-card-content"
        >
          <h1
            class="kylin-typography-title-h1 kylin-typography-strong"
          />
          This is a card
        </main>
        <footer>
          <div>
            Footer
          </div>
        </footer>
      </div>
    `)
  })
  test('Cover', () => {
    const { container } = render(
      <Card
        Cover={{
          element: <img src="1" />,
          position: 'left',
          shape: 'circle',
          size: 'small',
        }}
      >
        This is a card
      </Card>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-card-container flex flex-col p-2"
      >
        <div
          class="kylin-card-position-left kylin-card-size-small kylin-card-shape-circle flex"
        >
          <div
            class="kylin-card-cover"
          >
            <img
              src="1"
            />
          </div>
          <main
            class="kylin-card-content"
          >
            <h1
              class="kylin-typography-title-h1 kylin-typography-strong"
            />
            This is a card
          </main>
        </div>
        <footer />
      </div>
    `)
  })
  test('shape', () => {
    const { container } = render(
      <Card
        Cover={{
          element: <img src="1" />,
          position: 'left',
          shape: 'circle',
          size: 'small',
        }}
        shape="round"
      >
        round
      </Card>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-card-shape-round kylin-card-container flex flex-col p-2"
      >
        <div
          class="kylin-card-position-left kylin-card-size-small kylin-card-shape-circle flex"
        >
          <div
            class="kylin-card-cover"
          >
            <img
              src="1"
            />
          </div>
          <main
            class="kylin-card-content"
          >
            <h1
              class="kylin-typography-title-h1 kylin-typography-strong"
            />
            round
          </main>
        </div>
        <footer />
      </div>
    `)
  })
})
