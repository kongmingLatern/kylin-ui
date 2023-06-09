import { SVGType } from './type/SVGType'
const Unlock = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="unlock_svg__feather unlock_svg__feather-unlock"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={18}
      height={11}
      x={3}
      y={11}
      rx={2}
      ry={2}
    />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </svg>
)
export { Unlock }
