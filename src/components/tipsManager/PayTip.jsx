import React from "react"
import { IoMdClose } from "react-icons/io"

const PayTip = ({ setModal }) => {
  return (
    <div className="fixed left-1/2 top-1/2 z-[50] h-[100vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm">
      <div className="modalContainer flex w-[20.70364583333333vw] min-w-[550px] flex-col rounded-lg bg-white">
        <header className="border-b p-5">
          <h1 className="text-xl font-bold">Pay Tip</h1>
          <button
            onClick={() => {
              setModal(false)
            }}
            className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 hover:bg-secondary">
            <IoMdClose className="h-[20px] w-[20px]" />
          </button>
        </header>
        <body className="mt-3 flex gap-5 p-6">
          <div className="flex items-center gap-2">
            <input type="radio" id="tip" name="tip" className="h-4 w-4" />
            <label htmlFor="" className="font-medium">
              Cash
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" id="tip" name="tip" className="h-4 w-4" />
            <label htmlFor="" className="font-medium">
              Add to Paycheck
            </label>
          </div>
        </body>
        <div className="my-4 mb-6 flex items-center justify-center gap-3">
          <button
            onClick={() => {
              setModal(false)
            }}
            type="button"
            className=" rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ">
            Cancel
          </button>
          <button
            onClick={() => {}}
            className="rounded-md bg-primary px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default PayTip
