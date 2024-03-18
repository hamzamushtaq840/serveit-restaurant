import React from "react"
import Input from "../generic/Input"
import { GoCopy } from "react-icons/go"
import { PiCopyBold } from "react-icons/pi"
import { RxCopy } from "react-icons/rx"
import { TbPercentage } from "react-icons/tb"

const General = () => {
  return (
    <div className="relative flex h-full flex-col gap-6 p-4">
      <div className="flex items-center gap-2">
        <label for="email" className="w-[15.5%] font-medium">
          Server URL
        </label>
        <span className="w-[5%]">:</span>
        <input
          type="text"
          disabled
          placeholder="serveit.com/hlksi32"
          className={`w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
        />
        <RxCopy
          title="Copy"
          className="h-6 w-6 cursor-pointer text-[#747373] hover:text-black"
        />
      </div>
      <div className="flex items-center gap-2">
        <label for="email" className="w-[15.5%] font-medium">
          Kitchen URL
        </label>
        <span className="w-[5%]">:</span>
        <input
          type="text"
          disabled
          placeholder="serveit.com/hlksi32"
          className={`w-full  rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
        />
        <RxCopy
          title="Copy"
          className="h-6 w-6 cursor-pointer text-[#747373] hover:text-black"
        />
      </div>
      <div className="flex items-center gap-2">
        <label for="email" className="w-[15.5%] font-medium">
          Managers URL
        </label>
        <span className="w-[5%]">:</span>
        <input
          type="text"
          disabled
          placeholder="serveit.com/hlksi32"
          className={`w-full  rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
        />
        <RxCopy
          title="Copy"
          className="h-6 w-6 cursor-pointer text-[#747373] hover:text-black"
        />
      </div>
      <div className="flex items-center gap-2">
        <label for="email" className="w-[15.5%] font-medium">
          Hosts URL
        </label>
        <span className="w-[5%]">:</span>
        <input
          type="text"
          disabled
          placeholder="serveit.com/hlksi32"
          className={`w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
        />
        <RxCopy
          title="Copy"
          className="h-6 w-6 cursor-pointer text-[#747373] hover:text-black"
        />
      </div>
      <div className="flex items-center gap-2">
        <label for="email" className="w-[15.5%] font-medium">
          Tax Percentage
        </label>
        <span className="w-[5%]">:</span>
        <input
          type="text"
          className={`w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
        />
        <TbPercentage className="h-6 w-6 cursor-pointer text-[#747373] hover:text-black" />
      </div>

      <div className="absolute bottom-0 right-4">
        <button
          onClick={() => {}}
          className="rounded-md bg-primary px-8 py-1 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          Save
        </button>
      </div>
    </div>
  )
}

export default General
