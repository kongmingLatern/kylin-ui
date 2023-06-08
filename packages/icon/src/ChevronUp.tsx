import * as React from 'react'
import type { SVGProps } from 'react'
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="chevron-up_svg__feather chevron-up_svg__feather-chevron-up"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
)
export default SvgChevronUp
