import { SVGType } from './type/SVGType'
const Volume = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="volume_svg__feather volume_svg__feather-volume"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M11 5 6 9H2v6h4l5 4V5z" />
  </svg>
)
export { Volume }
