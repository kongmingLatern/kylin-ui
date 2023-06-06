import { render } from '@testing-library/react'
import Avatar from '../Avatar'

test('render', () => {
  const { container } = render(
    <Avatar src="./images/1.jpg" />
  )
  expect(container).toMatchInlineSnapshot(`
    <div>
      <img
        class="kylin-avatar-circle kylin-avatar-image"
        src="./images/1.jpg"
        style="width: 32px; height: 32px; line-height: 32px; font-size: 18px;"
      />
    </div>
  `)
})
