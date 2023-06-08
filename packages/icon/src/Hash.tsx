import * as React from 'react'
import type { SVGProps } from 'react'
const SvgHash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="hash_svg__feather hash_svg__feather-hash"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" />
  </svg>
)
export default SvgHash
