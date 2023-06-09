import type { SVGProps } from 'react'
const CornerDownRight = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="corner-down-right_svg__feather corner-down-right_svg__feather-corner-down-right"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m15 10 5 5-5 5" />
    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
  </svg>
)
export { CornerDownRight }
