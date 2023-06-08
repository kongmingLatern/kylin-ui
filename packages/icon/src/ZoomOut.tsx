import * as React from 'react'
import type { SVGProps } from 'react'
const SvgZoomOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="zoom-out_svg__feather zoom-out_svg__feather-zoom-out"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={11} cy={11} r={8} />
    <path d="m21 21-4.35-4.35M8 11h6" />
  </svg>
)
export default SvgZoomOut
