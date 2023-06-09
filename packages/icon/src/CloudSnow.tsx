import type { SVGProps } from 'react'
const CloudSnow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="cloud-snow_svg__feather cloud-snow_svg__feather-cloud-snow"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25M8 16h.01M8 20h.01M12 18h.01M12 22h.01M16 16h.01M16 20h.01" />
  </svg>
)
export { CloudSnow }
