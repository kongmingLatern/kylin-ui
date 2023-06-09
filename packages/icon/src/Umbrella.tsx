import type { SVGProps } from 'react'
const Umbrella = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="umbrella_svg__feather umbrella_svg__feather-umbrella"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" />
  </svg>
)
export { Umbrella }
