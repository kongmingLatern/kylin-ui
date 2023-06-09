import { SVGType } from './type/SVGType'
const BarChart2 = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="bar-chart-2_svg__feather bar-chart-2_svg__feather-bar-chart-2"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </svg>
)
export { BarChart2 }
