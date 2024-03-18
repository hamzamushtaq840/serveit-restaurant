import React from "react"
import Input from "../generic/Input"
import { GoCopy } from "react-icons/go"
import { PiCopyBold } from "react-icons/pi"
import { RxCopy } from "react-icons/rx"
import Switch from "react-switch"
import { FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaTiktok } from "react-icons/fa"
import { FaThreads } from "react-icons/fa6"

const Social = () => {
  return (
    <div className="relative flex h-full flex-col gap-6 p-4">
      <div className="flex items-center gap-2">
        <label for="email" className="w-[15.5%] font-medium">
          Facebook URL
        </label>
        <span className="w-[5%]">:</span>
        <input
          type="text"
          className={`w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
        />
        <FaFacebook
          title="Copy"
          className="h-6 w-6 cursor-pointer text-[#747373] hover:text-black"
        />
      </div>
      <div className="flex items-center gap-2">
        <label for="email" className="w-[15.5%] font-medium">
          XTwitter URL
        </label>
        <span className="w-[5%]">:</span>
        <input
          type="text"
          className={`w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
        />
        <FaXTwitter
          title="Copy"
          className="h-6 w-6 cursor-pointer text-[#747373] hover:text-black"
        />
      </div>
      <div className="flex items-center gap-2">
        <label for="email" className="w-[15%] font-medium">
          Instagram URL
        </label>
        <span className="w-[5%]">:</span>
        <input
          type="text"
          className={`w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
        />
        <FaInstagram
          title="Copy"
          className="h-6 w-6 cursor-pointer text-[#747373] hover:text-black"
        />
      </div>
      <div className="flex items-center gap-2">
        <label for="email" className="w-[15%] font-medium">
          Threads URL
        </label>
        <span className="w-[5%]">:</span>
        <input
          type="text"
          className={`w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
        />
        <FaThreads
          title="Copy"
          className="h-6 w-6 cursor-pointer text-[#747373] hover:text-black"
        />
      </div>
      <div className="flex items-center gap-2">
        <label for="email" className="w-[15%] font-medium">
          TikTok URL
        </label>
        <span className="w-[5%]">:</span>
        <input
          type="text"
          className={`w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
        />
        <FaTiktok
          title="Copy"
          className="h-6 w-6 cursor-pointer text-[#747373] hover:text-black"
        />
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

export default Social
