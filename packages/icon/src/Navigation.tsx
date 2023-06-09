import type { SVGProps } from 'react'
const Navigation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="navigation_svg__feather navigation_svg__feather-navigation"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m3 11 19-9-9 19-2-8-8-2z" />
  </svg>
)
export { Navigation }
