import type { SVGProps } from 'react'
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lock_svg__feather lock_svg__feather-lock"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={18}
      height={11}
      x={3}
      y={11}
      rx={2}
      ry={2}
    />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)
export { SvgLock }
