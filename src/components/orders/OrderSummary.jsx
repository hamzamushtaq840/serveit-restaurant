import React, { useState } from 'react'
import Summary from './Summary'
import Review from './Review'
import { IoMdClose } from "react-icons/io"

const OrderSummary = ({ onClose, orderId }) => {
  const [current, setCurrent] = useState('summary')

  const tabs = {
    summary: (<Summary />),
    review: (<Review />),
  }

  return (
    <div className="fixed left-1/2 top-1/2 z-[50] inline-block h-[100vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 transform ">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="modalContainer rubik z-[100] max-h-[98vh] overflow-auto pb-0 flex w-[60.70364583333333vw] min-w-[550px] flex-col rounded-lg bg-white">
        <header className="border-b p-5 flex justify-between ">
          <h1 className="text-xl font-bold">Order Summary <span className='text-[#838282] '>&nbsp; (ORD-1)</span></h1>

          <div className='flex gap-2 items-center'>
            <span onClick={() => current === 'review' ? setCurrent('summary') : setCurrent('review')} className='text-primary cursor-pointer hover:underline'>{current === 'review' ? 'Back' : 'Review'}</span>
            <button
              onClick={onClose}
              className="cursor-pointer rounded-lg p-2 hover:bg-secondary">
              <IoMdClose className="h-[20px] w-[20px]" />
            </button>
          </div>
        </header>
        {tabs[current]}
      </div>


    </div>
  )
}

export default OrderSummary