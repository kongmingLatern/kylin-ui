import { render } from '@testing-library/react'
import { Card } from '@components/Card'

test('render', () => {
  const { container } = render(<Card>This is a card</Card>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="kylin-card-container flex flex-col p-2"
    >
      <div
        class="sc-bdfCkl bTOQkl"
        direction="vertical"
        justify="start"
      >
        <div
          class="kylin-space-item"
          style="margin-bottom: 8px;"
        >
          <header />
        </div>
        <div
          class="kylin-space-item"
          style="margin-bottom: 8px;"
        >
          <main
            class="kylin-card-content p-2"
          >
            <h1
              class="kylin-typography-title-h1 kylin-typography-strong"
            />
            This is a card
          </main>
        </div>
        <div
          class="kylin-space-item"
        >
          <footer />
        </div>
      </div>
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
        <div
          class="sc-bdfCkl bTOQkl"
          direction="vertical"
          justify="start"
        >
          <div
            class="kylin-space-item"
            style="margin-bottom: 8px;"
          >
            <header>
              <div>
                Header
              </div>
            </header>
          </div>
          <div
            class="kylin-space-item"
            style="margin-bottom: 8px;"
          >
            <main
              class="kylin-card-content p-2"
            >
              <h1
                class="kylin-typography-title-h1 kylin-typography-strong"
              />
              This is a card
            </main>
          </div>
          <div
            class="kylin-space-item"
          >
            <footer />
          </div>
        </div>
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
        <div
          class="sc-bdfCkl bTOQkl"
          direction="vertical"
          justify="start"
        >
          <div
            class="kylin-space-item"
            style="margin-bottom: 8px;"
          >
            <header />
          </div>
          <div
            class="kylin-space-item"
            style="margin-bottom: 8px;"
          >
            <main
              class="kylin-card-content p-2"
            >
              <h1
                class="kylin-typography-title-h1 kylin-typography-strong"
              />
              <div>
                Content
              </div>
            </main>
          </div>
          <div
            class="kylin-space-item"
          >
            <footer />
          </div>
        </div>
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
        <div
          class="sc-bdfCkl bTOQkl"
          direction="vertical"
          justify="start"
        >
          <div
            class="kylin-space-item"
            style="margin-bottom: 8px;"
          >
            <header />
          </div>
          <div
            class="kylin-space-item"
            style="margin-bottom: 8px;"
          >
            <main
              class="kylin-card-content p-2"
            >
              <h1
                class="kylin-typography-title-h1 kylin-typography-strong"
              />
              This is a card
            </main>
          </div>
          <div
            class="kylin-space-item"
          >
            <footer>
              <div>
                Footer
              </div>
            </footer>
          </div>
        </div>
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
          class="sc-bdfCkl bTOQkl"
          direction="vertical"
          justify="start"
        >
          <div
            class="kylin-space-item"
            style="margin-bottom: 8px;"
          >
            <header />
          </div>
          <div
            class="kylin-space-item"
            style="margin-bottom: 8px;"
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
                class="kylin-card-content p-2"
              >
                <h1
                  class="kylin-typography-title-h1 kylin-typography-strong"
                />
                This is a card
              </main>
            </div>
          </div>
          <div
            class="kylin-space-item"
          >
            <footer />
          </div>
        </div>
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
          class="sc-bdfCkl bTOQkl"
          direction="vertical"
          justify="start"
        >
          <div
            class="kylin-space-item"
            style="margin-bottom: 8px;"
          >
            <header />
          </div>
          <div
            class="kylin-space-item"
            style="margin-bottom: 8px;"
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
                class="kylin-card-content p-2"
              >
                <h1
                  class="kylin-typography-title-h1 kylin-typography-strong"
                />
                round
              </main>
            </div>
          </div>
          <div
            class="kylin-space-item"
          >
            <footer />
          </div>
        </div>
      </div>
    `)
  })
})
