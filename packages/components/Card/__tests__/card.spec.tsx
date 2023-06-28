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
