import * as React from 'react'
import type { SVGProps } from 'react'
const SvgXOctagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="x-octagon_svg__feather x-octagon_svg__feather-x-octagon"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM15 9l-6 6M9 9l6 6" />
  </svg>
)
export default SvgXOctagon
