import { SVGType } from './type/SVGType'
const Shuffle = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="shuffle_svg__feather shuffle_svg__feather-shuffle"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
  </svg>
)
export { Shuffle }
