import type { SVGProps } from 'react'
const SvgPause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="pause_svg__feather pause_svg__feather-pause"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
  </svg>
)
export { SvgPause }
