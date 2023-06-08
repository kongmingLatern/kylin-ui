import * as React from 'react'
import type { SVGProps } from 'react'
const SvgCornerDownLeft = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="corner-down-left_svg__feather corner-down-left_svg__feather-corner-down-left"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m9 10-5 5 5 5" />
    <path d="M20 4v7a4 4 0 0 1-4 4H4" />
  </svg>
)
export default SvgCornerDownLeft
