import { SVGType } from './type/SVGType'

const Activity = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="activity_svg__feather activity_svg__feather-activity"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
)
export { Activity }
