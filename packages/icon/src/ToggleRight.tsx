import { SVGType } from './type/SVGType'
const ToggleRight = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="toggle-right_svg__feather toggle-right_svg__feather-toggle-right"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={22}
      height={14}
      x={1}
      y={5}
      rx={7}
      ry={7}
    />
    <circle cx={16} cy={12} r={3} />
  </svg>
)
export { ToggleRight }
