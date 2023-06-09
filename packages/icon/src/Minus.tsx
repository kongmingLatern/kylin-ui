import type { SVGProps } from 'react'
const Minus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="minus_svg__feather minus_svg__feather-minus"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M5 12h14" />
  </svg>
)
export { Minus }
