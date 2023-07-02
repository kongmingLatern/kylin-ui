import { render } from '@testing-library/react'
import Avatar from '../Avatar'

test('render', () => {
  const { container } = render(
    <Avatar src="./images/1.jpg" />
  )
  expect(container.firstChild).toMatchInlineSnapshot(`
    <span
      class="sc-bdfCkl hRcBEu"
      shape="circle"
    >
      <img
        src="./images/1.jpg"
      />
    </span>
  `)
})

describe('props', () => {
  test('src', () => {
    const { container } = render(
      <Avatar src="./images/1.jpg" />
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="sc-bdfCkl hRcBEu"
        shape="circle"
      >
        <img
          src="./images/1.jpg"
        />
      </span>
    `)
  })

  test('shape', () => {
    const { container } = render(
      <Avatar src="./images/1.jpg" shape="square" />
    )
    expect(container).toMatchInlineSnapshot(`
      <div>
        <span
          class="sc-bdfCkl eCOUZq"
          shape="square"
        >
          <img
            src="./images/1.jpg"
          />
        </span>
      </div>
    `)
  })

  test('icon', () => {
    const { container } = render(
      <Avatar
        icon={<img src="./images/1.jpg" width={32} />}
      />
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="sc-bdfCkl hRcBEu"
        shape="circle"
      >
        <img
          src="./images/1.jpg"
          width="32"
        />
      </span>
    `)
  })

  test('size', () => {
    const { container } = render(
      <Avatar src="./images/1.jpg" size="large" />
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="sc-bdfCkl ojIWl"
        shape="circle"
      >
        <img
          src="./images/1.jpg"
        />
      </span>
    `)
  })
})
