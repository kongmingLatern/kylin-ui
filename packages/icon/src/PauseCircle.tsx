import type { SVGProps } from 'react'
const PauseCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="pause-circle_svg__feather pause-circle_svg__feather-pause-circle"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M10 15V9M14 15V9" />
  </svg>
)
export { PauseCircle }
