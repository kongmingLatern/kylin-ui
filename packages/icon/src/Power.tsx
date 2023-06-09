import { SVGType } from './type/SVGType'
const Power = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="power_svg__feather power_svg__feather-power"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10" />
  </svg>
)
export { Power }
