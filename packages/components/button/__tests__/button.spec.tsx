import { render } from '@testing-library/react'
import Button from '../button'

test('render button', () => {
	const { container } = render(
		<Button>This is a primary button</Button>
	)
	expect(container.firstChild).toMatchInlineSnapshot(`
		<button
		  class="btn kylin-btn-default"
		  type="button"
		>
		  This is a primary button
		</button>
	`)
})
test("button's type", () => {
	const { container } = render(
		<Button type="default">This is a primary button</Button>
	)
	expect(container.firstChild).toMatchInlineSnapshot(`
		<button
		  class="btn kylin-btn-default"
		  type="button"
		>
		  This is a primary button
		</button>
	`)
})
test("button's other props", () => {
	const { container } = render(
		// @ts-ignore
		<Button type="default" bg="blue-500">
			This is a primary button
		</Button>
	)
	expect(container.firstChild).toMatchInlineSnapshot(`
		<button
		  bg="blue-500"
		  class="btn kylin-btn-default"
		  type="button"
		>
		  This is a primary button
		</button>
	`)
})
