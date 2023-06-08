import * as React from 'react'
import type { SVGProps } from 'react'
const SvgSmartphone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="smartphone_svg__feather smartphone_svg__feather-smartphone"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={14}
      height={20}
      x={5}
      y={2}
      rx={2}
      ry={2}
    />
    <path d="M12 18h.01" />
  </svg>
)
export default SvgSmartphone
