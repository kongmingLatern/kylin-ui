import { SVGType } from './type/SVGType'
const Image = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="image_svg__feather image_svg__feather-image"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={18}
      height={18}
      x={3}
      y={3}
      rx={2}
      ry={2}
    />
    <circle cx={8.5} cy={8.5} r={1.5} />
    <path d="m21 15-5-5L5 21" />
  </svg>
)
export { Image }