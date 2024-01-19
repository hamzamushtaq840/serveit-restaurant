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
      d="M12.043 14.52H4.96c-2.125 0-3.542-1.062-3.542-3.54V6.02c0-2.478 1.417-3.54 3.542-3.54h7.083c2.125 0 3.542 1.062 3.542 3.54v4.96c0 2.478-1.417 3.54-3.542 3.54ZM4.25 5.667v5.666M6.375 5.667V8.5M6.375 10.625v.708M10.625 5.667v.708M8.5 5.667v5.666M10.625 8.5v2.833M12.75 5.667v5.666"
    />
  </svg>
)
export default SvgComponent
