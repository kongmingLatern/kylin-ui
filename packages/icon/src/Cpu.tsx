import { SVGType } from './type/SVGType'
const Cpu = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="cpu_svg__feather cpu_svg__feather-cpu"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={16}
      height={16}
      x={4}
      y={4}
      rx={2}
      ry={2}
    />
    <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
  </svg>
)
export { Cpu }
