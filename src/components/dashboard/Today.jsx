import React from "react"
import { FaRegArrowAltCircleRight } from "react-icons/fa"

const Today = () => {
  return (
    <div className=" relative flex flex-col gap-3 overflow-hidden rounded bg-white p-5 shadow-lg">
      <span className="rubik text-lg font-semibold">Today's Orders</span>
      <div className="flex items-center gap-1">
        <span className="rubik text-3xl font-bold">120</span>
        <div className="flex items-center gap-1 text-sm">
          <FaRegArrowAltCircleRight className="-rotate-45 text-green-400" />
          <span>3%</span>
        </div>
      </div>
    </div>
  )
}

export default Today
