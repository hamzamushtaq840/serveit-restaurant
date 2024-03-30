import React from "react"

const Employees = () => {
  return (
    <div className=" relative flex h-full flex-col gap-3 overflow-hidden rounded bg-white p-5 shadow-lg">
      <span className="rubik text-lg font-semibold">Employees</span>
      <div className="mt-5 flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="rubik font-medium">Total</span>
          <span className="rubik">500</span>
        </div>
        <div className="flex justify-between">
          <span className="rubik font-medium">Not Active Employees</span>
          <span className="rubik">500</span>
        </div>
        <div className="flex justify-between">
          <span className="rubik font-medium">Active Host</span>
          <span className="rubik">500</span>
        </div>
        <div className="flex justify-between">
          <span className="rubik font-medium">Active Managers</span>
          <span className="rubik">500</span>
        </div>
        <div className="flex justify-between">
          <span className="rubik font-medium">Active Admin</span>
          <span className="rubik">500</span>
        </div>
      </div>
    </div>
  )
}

export default Employees
