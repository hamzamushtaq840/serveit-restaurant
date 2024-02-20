import React, { useState } from 'react'
import { AiOutlinePercentage } from "react-icons/ai";
import { FaMinus, FaPlus, FaUsers } from 'react-icons/fa';

const SplitBill = () => {
  const [state, setState] = useState(0)

  return (
    <>
      <div className="mx-5 mb-4 flex items-center gap-2">
        <div className='rounded-full ml-[-2px] border-primary border p-1'>
          <AiOutlinePercentage className="h-3 w-3 text-primary" />
        </div>
        <h1 className="rubik text-xl font-bold">
          Split Bill Calculator
          <span className="text-sm font-semibold text-grey"> (Optional)</span>
        </h1>
      </div>
      {/* <section className="grid grid-cols-3 gap-2 px-4"> */}

      <div className="mx-5 mb-8 mt-1 flex flex-col items-start gap-2 rounded p-4 shadow-itemOptions">
        <div className='flex w-full'>
          <div className='flex gap-2 flex-1 items-center'>
            <FaUsers className='w-5 h-5 text-primary' />
            <span className='rubik'>Persons</span>
          </div>
          <div className='flex rounded-md px-2 gap-3 border items-center py-1'>
            <FaMinus onClick={() => { if (state > 0) { setState(state - 1) } }} className="mx-auto h-3 w-3 hover:text-ring text-black" />
            <span className="text-lg w-[20px] flex justify-center">{state}</span>
            <FaPlus onClick={() => { setState(state + 1) }} className="mx-auto h-3 w-3 hover:text-ring text-black" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SplitBill