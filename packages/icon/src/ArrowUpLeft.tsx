import type { SVGProps } from 'react'
const ArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="arrow-up-left_svg__feather arrow-up-left_svg__feather-arrow-up-left"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M17 17 7 7M7 17V7h10" />
  </svg>
)
export { ArrowUpLeft }
