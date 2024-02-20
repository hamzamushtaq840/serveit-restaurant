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
      d="M14.146 7.083H2.812v5.667c0 2.125.709 2.833 2.834 2.833h5.667c2.124 0 2.833-.708 2.833-2.833V7.083ZM15.228 4.958v.709c0 .779-.376 1.416-1.417 1.416H3.186c-1.084 0-1.416-.637-1.416-1.416v-.709c0-.779.332-1.416 1.416-1.416h10.625c1.041 0 1.417.637 1.417 1.416ZM8.246 3.542h-3.91a.663.663 0 0 1 .02-.921l1.007-1.006a.68.68 0 0 1 .956 0l1.927 1.927ZM12.656 3.542h-3.91l1.927-1.927a.68.68 0 0 1 .956 0l1.006 1.006a.663.663 0 0 1 .021.92Z"
    />
    <path
      stroke="#6B6B6B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.332 7.083v3.641c0 .567.623.9 1.098.595l.666-.439a.708.708 0 0 1 .779 0l.63.425a.706.706 0 0 0 1.098-.588V7.083H6.332Z"
    />
  </svg>
)
export default SvgComponent
