import * as React from 'react'
import type { SVGProps } from 'react'
const SvgDroplet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="droplet_svg__feather droplet_svg__feather-droplet"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m12 2.69 5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
)
export default SvgDroplet
