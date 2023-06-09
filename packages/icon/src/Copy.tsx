import type { SVGProps } from 'react'
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="copy_svg__feather copy_svg__feather-copy"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={13}
      height={13}
      x={9}
      y={9}
      rx={2}
      ry={2}
    />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)
export { SvgCopy }
