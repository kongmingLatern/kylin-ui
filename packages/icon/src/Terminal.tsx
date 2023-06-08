import * as React from 'react'
import type { SVGProps } from 'react'
const SvgTerminal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="terminal_svg__feather terminal_svg__feather-terminal"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m4 17 6-6-6-6M12 19h8" />
  </svg>
)
export default SvgTerminal
