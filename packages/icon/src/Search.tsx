import type { SVGProps } from 'react'
const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="search_svg__feather search_svg__feather-search"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={11} cy={11} r={8} />
    <path d="m21 21-4.35-4.35" />
  </svg>
)
export { Search }
