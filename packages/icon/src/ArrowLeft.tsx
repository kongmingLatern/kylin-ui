import * as React from 'react'
import type { SVGProps } from 'react'
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="arrow-left_svg__feather arrow-left_svg__feather-arrow-left"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
)
export default SvgArrowLeft
