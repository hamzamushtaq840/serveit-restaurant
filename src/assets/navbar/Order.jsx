import * as React from "react"
const SvgComponent = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}>
    <path
      stroke="#6B6B6B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.582 4.25v1.714c0 1.12-.708 1.828-1.828 1.828h-2.422V2.84a1.43 1.43 0 0 1 1.43-1.423c.773.007 1.481.318 1.991.828.51.517.829 1.226.829 2.005Z"
    />
    <path
      stroke="#6B6B6B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M1.418 4.958v9.917c0 .588.666.92 1.133.567l1.212-.907a.714.714 0 0 1 .935.07l1.175 1.184a.714.714 0 0 0 1.006 0l1.19-1.19a.702.702 0 0 1 .921-.064l1.211.907a.71.71 0 0 0 1.134-.567V2.833c0-.779.637-1.416 1.416-1.416h-8.5c-2.125 0-2.833 1.268-2.833 2.833v.708Z"
    />
    <path
      stroke="#CDD2D6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.375 9.215H8.5M6.375 6.382H8.5"
    />
    <path
      stroke="#CDD2D6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.246 9.208h.006M4.246 6.375h.006"
    />
  </svg>
)
export default SvgComponent
