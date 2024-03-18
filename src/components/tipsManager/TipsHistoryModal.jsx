import React from "react"
import { IoMdClose } from "react-icons/io"

const TipsHistoryModal = ({ setModal }) => {
  return (
    <div className="fixed left-1/2 top-1/2 z-[50] h-[100vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm">
      <div className="modalContainer flex w-[60.70364583333333vw] min-w-[550px] flex-col rounded-lg bg-white">
        <header className="border-b p-5">
          <h1 className="text-xl font-bold">Tips History</h1>
          <button
            onClick={() => {
              setModal(false)
            }}
            className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 hover:bg-secondary">
            <IoMdClose className="h-[20px] w-[20px]" />
          </button>
        </header>
        <body className="p-6">
          <div className="grid h-10 grid-cols-5 items-center bg-primarySub px-4 text-white">
            <span className="text-center">Date</span>
            <span className="text-center">Total</span>
            <span className="text-center">Widraw</span>
            <span className="text-center">Payment Method</span>
            <span className="text-center">Balance</span>
          </div>
          <div className="flex max-h-[550px] flex-col divide-y-2 divide-[#ccc] overflow-auto text-white">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div className="mb-2 grid grid-cols-5 px-4 py-3 text-black">
                <span className="text-center">01/19/2024</span>
                <span className="flex items-center justify-center">
                  <span>$</span>
                  <span>899</span>
                </span>
                <span className="flex items-center justify-center">
                  <span>$</span>
                  <span>20</span>
                </span>
                <span className="text-center">
                  {index % 2 === 0 ? "Pay Check" : "Cash"}
                </span>
                <span className="flex items-center justify-center">
                  <span>$</span>
                  <span>20</span>
                </span>
              </div>
            ))}
          </div>
        </body>
      </div>
    </div>
  )
}

export default TipsHistoryModal
