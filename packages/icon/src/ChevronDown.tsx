import { SVGType } from './type/SVGType'
const ChevronDown = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="chevron-down_svg__feather chevron-down_svg__feather-chevron-down"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)
export { ChevronDown }
