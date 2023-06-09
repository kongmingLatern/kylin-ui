import { SVGType } from './type/SVGType'
const DivideCircle = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="divide-circle_svg__feather divide-circle_svg__feather-divide-circle"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M8 12h8M12 16h0M12 8h0" />
    <circle cx={12} cy={12} r={10} />
  </svg>
)
export { DivideCircle }
