import type { SVGProps } from 'react'
const SvgCornerRightUp = (
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
    className="corner-right-up_svg__feather corner-right-up_svg__feather-corner-right-up"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m10 9 5-5 5 5" />
    <path d="M4 20h7a4 4 0 0 0 4-4V4" />
  </svg>
)
export { SvgCornerRightUp }
