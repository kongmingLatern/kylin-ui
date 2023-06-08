import * as React from 'react'
import type { SVGProps } from 'react'
const SvgPlayCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="play-circle_svg__feather play-circle_svg__feather-play-circle"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="m10 8 6 4-6 4V8z" />
  </svg>
)
export default SvgPlayCircle
