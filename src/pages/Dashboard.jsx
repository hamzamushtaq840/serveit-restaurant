import React from "react"
import Open from "../components/dashboard/Open"
import Accepted from "../components/dashboard/Accepted"
import Ready from "../components/dashboard/Ready"
import Today from "../components/dashboard/Today"
import Analysis from "../components/dashboard/Analysis"
import Employees from "../components/dashboard/Employees"
import Revenue from "../components/dashboard/Revenue"
import Inventory from "../components/dashboard/Inventory"
import { IoIosArrowDown } from "react-icons/io"

const Dashboard = () => {
  return (
    <div className="flex flex-col px-6 py-8">
      {/* top */}
      <div className="flex gap-5">
        {/* top-left */}
        <div className="flex w-[75%] flex-col gap-5">
          {/* top-left-top */}
          <div className="grid h-[144px] grid-cols-4 gap-5">
            <Open />
            <Accepted />
            <Ready />
            <Today />
          </div>
          {/* top-left-bottom */}
          <div className="flex flex-col bg-white">
            <div className="flex gap-3 px-5 pt-5">
              <span className="rubik text-xl font-semibold">
                Analysis (Sales)
              </span>
              <span className="flex cursor-pointer items-center gap-2 text-grey">
                Monthly <IoIosArrowDown />
              </span>
            </div>
            <Analysis />
          </div>
        </div>

        {/* top-right */}
        <div className="w-[25%]">
          <Employees />
        </div>
      </div>

      {/* bottom */}
      <div className="mt-5 flex gap-5">
        <Revenue />
        <Inventory />
      </div>
    </div>
  )
}

export default Dashboard
