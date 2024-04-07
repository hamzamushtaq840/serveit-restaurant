import React from "react"

const Employees = () => {
  return (
    <div className=" relative flex h-full flex-col justify-between overflow-hidden rounded bg-white p-5 pb-10 shadow-lg">
      <div className="flex flex-col gap-4">
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

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <span className="rubik font-medium">Active Kitchen Users</span>
          <span className="text-2xl font-semibold">23</span>
          <div className="h-[10px] w-[100%] rounded-full bg-[#cfcfcf7c]">
            <div
              style={{ width: `60%` }}
              className={`h-[10px] rounded-full bg-primary`}></div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="rubik font-medium">Active Servers</span>
          <span className="text-2xl font-semibold">76</span>
          <div className="h-[10px] w-[100%] rounded-full bg-[#cfcfcf7c]">
            <div
              style={{ width: `80%` }}
              className={`h-[10px] rounded-full bg-primary`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employees
