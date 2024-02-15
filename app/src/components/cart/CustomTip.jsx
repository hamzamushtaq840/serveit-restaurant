import React from "react"
import { MdDeleteOutline } from "react-icons/md"

const CustomTip = ({ customTip, setCustomTip }) => {
  return (
    <div>
      {!customTip && (
        <div
          onClick={() => setCustomTip(!customTip)}
          className={`text-bold rubik m-4 flex h-11 items-center justify-center rounded border-[0.5px] border-[#9B9B9B] bg-[#FAFBFD]`}>
          Add Custom Tip
        </div>
      )}

      {customTip && (
        <div className="relative m-4 flex items-center justify-between">
          <input
            type={"number"}
            placeholder={"Enter Tip Amount"}
            className={`placeholder:rubik h-11 w-[92%] rounded border-[0.5px] border-[#9B9B9B] bg-[#FAFBFD] px-2 indent-4 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
          />
          <MdDeleteOutline
            onClick={() => setCustomTip(false)}
            className="mr- h-6 w-6 text-red-500"
          />
          <div className="absolute left-2 text-grey">$</div>
        </div>
      )}
    </div>
  )
}

export default CustomTip
