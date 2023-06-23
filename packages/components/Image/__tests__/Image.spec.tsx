import { render } from '@testing-library/react'
import { Image } from '../Image'

test('render', () => {
  const { container } = render(<Image src="1" />)

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="kylin-spin-nested-loading"
    >
      <div>
        <div
          aria-busy="true"
          aria-live="polite"
          class="kylin-spin kylin-spin-spinning"
        >
          <div
            class="kylin-spin-dot"
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
          </div>
        </div>
      </div>
      <div
        class="kylin-spin-container kylin-spin-blur"
      >
        <img
          class="kylin-image-preview"
          src="1"
          style="display: none;"
        />
      </div>
    </div>
  `)
})
