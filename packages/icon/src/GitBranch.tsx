import type { SVGProps } from 'react'
const GitBranch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="git-branch_svg__feather git-branch_svg__feather-git-branch"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6 3v12" />
    <circle cx={18} cy={6} r={3} />
    <circle cx={6} cy={18} r={3} />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
)
export { GitBranch }
