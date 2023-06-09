import type { SVGProps } from 'react'
const Target = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="target_svg__feather target_svg__feather-target"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <circle cx={12} cy={12} r={6} />
    <circle cx={12} cy={12} r={2} />
  </svg>
)
export { Target }
