import type { SVGProps } from 'react'
const SvgCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="code_svg__feather code_svg__feather-code"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
)
export { SvgCode }
