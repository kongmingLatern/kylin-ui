import { SVGType } from './type/SVGType'
const ChevronsLeft = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="chevrons-left_svg__feather chevrons-left_svg__feather-chevrons-left"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m11 17-5-5 5-5M18 17l-5-5 5-5" />
  </svg>
)
export { ChevronsLeft }
