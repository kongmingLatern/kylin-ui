import type { SVGProps } from 'react'
const SvgCloudOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="cloud-off_svg__feather cloud-off_svg__feather-cloud-off"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3M1 1l22 22" />
  </svg>
)
export { SvgCloudOff }
