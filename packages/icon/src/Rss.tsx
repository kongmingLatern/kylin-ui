import type { SVGProps } from 'react'
const Rss = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="rss_svg__feather rss_svg__feather-rss"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" />
    <circle cx={5} cy={19} r={1} />
  </svg>
)
export { Rss }
