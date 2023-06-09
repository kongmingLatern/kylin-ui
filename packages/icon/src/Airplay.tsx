import { SVGType } from './type/SVGType'
const Airplay = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="airplay_svg__feather airplay_svg__feather-airplay"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
    <path d="m12 15 5 6H7l5-6z" />
  </svg>
)
export { Airplay }
