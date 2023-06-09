import type { SVGProps } from 'react'
const Type = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="type_svg__feather type_svg__feather-type"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M4 7V4h16v3M9 20h6M12 4v16" />
  </svg>
)
export { Type }
