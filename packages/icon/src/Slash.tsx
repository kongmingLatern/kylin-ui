import * as React from 'react'
import type { SVGProps } from 'react'
const SvgSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="slash_svg__feather slash_svg__feather-slash"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="m4.93 4.93 14.14 14.14" />
  </svg>
)
export default SvgSlash
