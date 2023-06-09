import { SVGType } from './type/SVGType'
const DownloadCloud = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="download-cloud_svg__feather download-cloud_svg__feather-download-cloud"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m8 17 4 4 4-4M12 12v9" />
    <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
  </svg>
)
export { DownloadCloud }
