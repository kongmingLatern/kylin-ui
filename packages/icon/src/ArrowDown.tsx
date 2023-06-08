import * as React from 'react'
import type { SVGProps } from 'react'
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="arrow-down_svg__feather arrow-down_svg__feather-arrow-down"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
)
export default SvgArrowDown
