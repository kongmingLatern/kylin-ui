import { SVGType } from './type/SVGType'
const SkipForward = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="skip-forward_svg__feather skip-forward_svg__feather-skip-forward"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m5 4 10 8-10 8V4zM19 5v14" />
  </svg>
)
export { SkipForward }
