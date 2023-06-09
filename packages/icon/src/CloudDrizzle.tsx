import { SVGType } from './type/SVGType'
const CloudDrizzle = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="cloud-drizzle_svg__feather cloud-drizzle_svg__feather-cloud-drizzle"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M8 19v2M8 13v2M16 19v2M16 13v2M12 21v2M12 15v2M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
  </svg>
)
export { CloudDrizzle }
