import type { SVGProps } from 'react'
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="arrow-right_svg__feather arrow-right_svg__feather-arrow-right"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)
export { ArrowRight }
