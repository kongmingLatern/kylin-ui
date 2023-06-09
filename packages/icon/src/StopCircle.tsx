import { SVGType } from './type/SVGType'
const StopCircle = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="stop-circle_svg__feather stop-circle_svg__feather-stop-circle"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M9 9h6v6H9z" />
  </svg>
)
export { StopCircle }
