import { render } from "@testing-library/react";
import Button from '../button';

test('render button', () => {
  const { container } = render(<Button>This is a primary button</Button>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="btn"
      type="button"
    >
      This is a primary button
    </button>
  `)
})
test('button\'s type', () => {
  const { container } = render(<Button type="default">This is a primary button</Button>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="btn kylin-btn-default"
    >
      This is a primary button
    </button>
  `)
})