import { SVGType } from './type/SVGType'
const Play = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="play_svg__feather play_svg__feather-play"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m5 3 14 9-14 9V3z" />
  </svg>
)
export { Play }
