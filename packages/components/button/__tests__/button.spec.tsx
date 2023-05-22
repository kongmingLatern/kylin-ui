import { render } from '@testing-library/react'
import { Button } from '../button'

test('render button', () => {
  const { container } = render(
    <Button>This is a primary button</Button>
  )
  expect(container.firstChild).toMatchInlineSnapshot(`
		<button
		  class="kylin-btn-default"
		  type="button"
		>
		  This is a primary button
		</button>
	`)
})

describe("button's props", () => {
  test("button's type", () => {
    const { container } = render(
      <Button type="primary">
        This is a primary button
      </Button>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
		<button
		  class="kylin-btn-primary"
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
        class="kylin-btn-default bg-blue-500-500"
        type="button"
      >
        This is a primary button
      </button>
    `)
  })
  test("button's color", () => {
    const { container } = render(
      <Button color="green">
        This is a primary button
      </Button>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="kylin-btn-default text-green-500"
      type="button"
    >
      This is a primary button
    </button>
  `)
  })
  test("button's bg", () => {
    const { container } = render(
      <Button bg="green">This is a primary button</Button>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="kylin-btn-default bg-green-500"
        type="button"
      >
        This is a primary button
      </button>
    `)
  })
  test("button's hover", () => {
    const { container } = render(
      <Button hover="green">
        This is a primary button
      </Button>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="kylin-btn-default hover:bg-green-700"
        type="button"
      >
        This is a primary button
      </button>
    `)
  })
  test("button's bg and hover", () => {
    const { container } = render(
      <Button hover="green" bg="blue">
        This is a primary button
      </Button>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="kylin-btn-default bg-blue-500 hover:bg-green-700"
        type="button"
      >
        This is a primary button
      </button>
    `)
  })
  test("button's padding", () => {
    const { container } = render(
      <Button p={1} pl={2}>
        This is a primary button
      </Button>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="kylin-btn-default p-1 pl-2"
        type="button"
      >
        This is a primary button
      </button>
    `)
  })
  test("button's margin", () => {
    const { container } = render(
      <Button m={1}>This is a primary button</Button>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="kylin-btn-default m-1"
        type="button"
      >
        This is a primary button
      </button>
    `)
  })
})
