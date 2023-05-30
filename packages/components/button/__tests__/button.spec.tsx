import { render } from '@testing-library/react'
import { Button } from '../Button'

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
  test("button's shape", () => {
    const { container } = render(
      <Button shape="round">
        This is a primary button
      </Button>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="kylin-btn-default kylin-btn-shape-round"
        type="button"
      >
        This is a primary button
      </button>
    `)
  })
  test("button's block", () => {
    const { container } = render(
      <Button block>This is a block button</Button>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="kylin-btn-default kylin-btn-block"
        type="button"
      >
        This is a block button
      </button>
    `)
  })
  test("button's ghost", () => {
    const { container } = render(
      <Button ghost>This is a ghost button</Button>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="kylin-btn-ghost"
        type="button"
      >
        This is a ghost button
      </button>
    `)
  })
  test("button's size", () => {
    const { container } = render(
      <Button size={'large'}>This is a size button</Button>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="kylin-btn-default kylin-btn-size-large"
        type="button"
      >
        This is a size button
      </button>
    `)
  })
  test("button's loading", () => {
    const { container } = render(
      <Button loading>This is a loading button</Button>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="kylin-btn-default kylin-btn-loading kylin-btn-disabled"
        disabled=""
        type="button"
      >
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            fill="none"
            height="24"
            stroke="none"
            width="24"
            x="0"
            y="0"
          />
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
          >
            <path
              d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
              stroke-dasharray="60"
              stroke-dashoffset="60"
              stroke-opacity=".3"
            >
              <animate
                attributeName="stroke-dashoffset"
                dur="1.3s"
                fill="freeze"
                values="60;0"
              />
            </path>
            <path
              d="M12 3C16.9706 3 21 7.02944 21 12"
              stroke-dasharray="15"
              stroke-dashoffset="15"
            >
              <animate
                attributeName="stroke-dashoffset"
                dur="0.3s"
                fill="freeze"
                values="15;0"
              />
              <animatetransform
                attributeName="transform"
                dur="1.5s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </path>
          </g>
        </svg>
        This is a loading button
      </button>
    `)
  })
  test("button's beforeIcon", () => {
    const { container } = render(
      <Button beforeIcon={<div>BeforeIcon</div>}>
        beforeIcon
      </Button>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="kylin-btn-default"
        type="button"
      >
        <span
          class="kylin-btn-icon-before"
        >
          <div>
            BeforeIcon
          </div>
        </span>
        beforeIcon
      </button>
    `)
  })
  test("button's afterIcon", () => {
    const { container } = render(
      <Button afterIcon={<div>AfterIcon</div>}>
        afterIcon
      </Button>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="kylin-btn-default"
        type="button"
      >
        afterIcon
        <span
          class="kylin-btn-icon-after"
        >
          <div>
            AfterIcon
          </div>
        </span>
      </button>
    `)
  })
})
