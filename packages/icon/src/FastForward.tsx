import type { SVGProps } from 'react'
const FastForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="fast-forward_svg__feather fast-forward_svg__feather-fast-forward"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m13 19 9-7-9-7v14zM2 19l9-7-9-7v14z" />
  </svg>
)
export { FastForward }
