import { SVGType } from './type/SVGType'
const MoreVertical = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="more-vertical_svg__feather more-vertical_svg__feather-more-vertical"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={1} />
    <circle cx={12} cy={5} r={1} />
    <circle cx={12} cy={19} r={1} />
  </svg>
)
export { MoreVertical }
