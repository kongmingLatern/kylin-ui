import type { SVGProps } from 'react'
const CornerRightDown = (
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
    className="corner-right-down_svg__feather corner-right-down_svg__feather-corner-right-down"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m10 15 5 5 5-5" />
    <path d="M4 4h7a4 4 0 0 1 4 4v12" />
  </svg>
)
export { CornerRightDown }
