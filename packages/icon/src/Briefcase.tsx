import type { SVGProps } from 'react'
const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="briefcase_svg__feather briefcase_svg__feather-briefcase"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={20}
      height={14}
      x={2}
      y={7}
      rx={2}
      ry={2}
    />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)
export { SvgBriefcase }
