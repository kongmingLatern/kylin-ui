import type { SVGProps } from 'react'
const SvgChevronsDown = (
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
    className="chevrons-down_svg__feather chevrons-down_svg__feather-chevrons-down"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m7 13 5 5 5-5M7 6l5 5 5-5" />
  </svg>
)
export { SvgChevronsDown }
