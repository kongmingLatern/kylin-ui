import type { SVGProps } from 'react'
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="arrow-up_svg__feather arrow-up_svg__feather-arrow-up"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
)
export { SvgArrowUp }
