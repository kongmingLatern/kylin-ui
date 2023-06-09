import type { SVGProps } from 'react'
const Divide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="divide_svg__feather divide_svg__feather-divide"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={6} r={2} />
    <path d="M5 12h14" />
    <circle cx={12} cy={18} r={2} />
  </svg>
)
export { Divide }
