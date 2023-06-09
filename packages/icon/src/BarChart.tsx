import type { SVGProps } from 'react'
const SvgBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="bar-chart_svg__feather bar-chart_svg__feather-bar-chart"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 20V10M18 20V4M6 20v-4" />
  </svg>
)
export { SvgBarChart }
