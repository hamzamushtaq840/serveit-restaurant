import React from 'react'
import { orderItems } from '../../utils/constants'

const Summary = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <section className='mx-5 mt-5 flex flex-col'>

        <div className='p-4 rounded grid grid-cols-3 bg-primarySub'>
          <h1 className='text-center text-white'>Product</h1>
          <h1 className='text-center text-white'>Quantity</h1>
          <h1 className='text-center text-white'>Price</h1>
        </div>

        <div className='flex flex-col divide-y-[1px] divide-[#cccccca8]'>
          {orderItems?.items?.map((v, i) => {
            return (
              <div className='grid p-3 grid-cols-3'>
                <h1 className='text-center'>{v.name}</h1>
                <h1 className='text-center'>{v.quantity}</h1>
                <h1 className='text-center'>{v.price}</h1>
              </div>
            )
          })}
        </div>

      </section>

      <section className='flex flex-col border-t mx-5 border-[#ccc]'>
        <div className='grid grid-cols-3 mt-5'>
          <h1 className='font-medium text-center'>Customer</h1>
          <h1 className='font-medium text-center'></h1>
          <h1 className='text-center'>Hamza Mushtaq</h1>
        </div>
        <div className='grid grid-cols-3 mt-3'>
          <h1 className='font-medium text-center'>Server</h1>
          <h1 className='font-medium text-center'></h1>
          <h1 className='text-center'>Alex Hadd</h1>
        </div>
        <div className='grid grid-cols-3 mt-3'>
          <h1 className='font-medium text-center'>Section</h1>
          <h1 className='font-medium text-center'></h1>
          <h1 className='text-center'>1</h1>
        </div>
        <div className='grid grid-cols-3 mt-3'>
          <h1 className='font-medium text-center'>Table</h1>
          <h1 className='font-medium text-center'></h1>
          <h1 className='text-center'>27</h1>
        </div>
        <div className='grid grid-cols-3 mt-3'>
          <h1 className='font-medium text-center'>SubTotal</h1>
          <h1 className='font-medium text-center'></h1>
          <h1 className='text-center'>$827</h1>
        </div>
        <div className='grid grid-cols-3 mt-3'>
          <h1 className='font-medium text-center'>Tax (20%)</h1>
          <h1 className='font-medium text-center'></h1>
          <h1 className='text-center'>$48</h1>
        </div>
        <div className='grid grid-cols-3 mt-3'>
          <h1 className='font-medium text-center'>Promo discount</h1>
          <h1 className='font-medium text-center'></h1>
          <h1 className='text-center'>$482</h1>
        </div>
        <div className='w-full h-[1px] bg-[#ccc] mt-4'></div>
        <div className='grid grid-cols-3 mt-3'>
          <h1 className='text-2xl text-center text-primary font-semibold'>Total</h1>
          <h1 className='font-medium text-center'></h1>
          <h1 className='text-center text-2xl text-primary font-semibold'>$827</h1>
        </div>
      </section>

      <div onClick={handlePrint} className='flex justify-end'>
        <button className='mx-5 hover:underline hover:text-blue-600'>Print</button>
      </div>
    </>
  )
}

export default Summary