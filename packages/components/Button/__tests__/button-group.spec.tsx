import { render } from '@testing-library/react'
import { ButtonGroup } from '../ButtonGroup'
import { Button } from '..'

test('render', () => {
  const { container } = render(
    <ButtonGroup>
      <button>Button1</button>
      <button>Button2</button>
      <button>Button3</button>
    </ButtonGroup>
  )
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="kylin-btn-group"
    >
      <button>
        Button1
      </button>
      <button>
        Button2
      </button>
      <button>
        Button3
      </button>
    </div>
  `)
})

describe('button-group context', () => {
  test('props -> size', () => {
    const { container } = render(
      <ButtonGroup size={'small'}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="kylin-btn-group"
      >
        <button
          class="kylin-btn-default kylin-btn-size-small"
          type="button"
        >
          1
        </button>
        <button
          class="kylin-btn-default kylin-btn-size-small"
          type="button"
        >
          2
        </button>
        <button
          class="kylin-btn-default kylin-btn-size-small"
          type="button"
        >
          3
        </button>
      </div>
    `)
  })
})
