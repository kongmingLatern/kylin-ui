import type { SVGProps } from 'react'
const SvgTrendingDown = (
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
    className="trending-down_svg__feather trending-down_svg__feather-trending-down"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m23 18-9.5-9.5-5 5L1 6" />
    <path d="M17 18h6v-6" />
  </svg>
)
export { SvgTrendingDown }
