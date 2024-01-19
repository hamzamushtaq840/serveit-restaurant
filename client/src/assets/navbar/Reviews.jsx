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
      strokeWidth={1.5}
      d="m9.726 2.486 1.247 2.494c.17.347.623.68 1.005.743l2.26.376c1.445.24 1.785 1.289.744 2.323l-1.757 1.757c-.297.297-.46.871-.368 1.282l.503 2.174c.396 1.722-.517 2.388-2.04 1.488l-2.118-1.254c-.383-.226-1.013-.226-1.403 0l-2.118 1.254c-1.515.9-2.436.227-2.04-1.488l.503-2.174c.092-.411-.07-.985-.368-1.282L2.019 8.422C.985 7.388 1.318 6.34 2.763 6.1l2.26-.376c.375-.063.828-.396.998-.743l1.247-2.494c.68-1.353 1.785-1.353 2.458 0Z"
    />
  </svg>
)
export default SvgComponent
