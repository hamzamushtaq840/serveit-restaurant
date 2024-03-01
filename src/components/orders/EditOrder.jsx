import React from 'react'
import { IoMdClose } from 'react-icons/io'
import Select from '../generic/Select'
import Input from '../generic/Input'

const EditOrder = ({ onClose }) => {

  return (
    <div className="fixed left-1/2 top-1/2 z-[50] inline-block h-[100vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 transform ">
      <div onClick={onClose} className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="modalContainer rubik z-[100] max-h-[95vh] overflow-auto pb-0 flex w-[30.70364583333333vw] min-w-[550px] flex-col rounded-lg bg-white">
        <header className="border-b p-5">
          <h1 className="text-xl font-bold">Edit Order <span className='text-[#838282ae] '>&nbsp;- (ORD-1) &nbsp; -  TOTAL: $999</span></h1>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 hover:bg-secondary">
            <IoMdClose className="h-[20px] w-[20px]" />
          </button>
        </header>

        <section className='mx-5 my-5 flex flex-col'>
          <div className='flex flex-col gap-3'>
            <Select
              label={"Status"}
              name={"server"}
              options={["Open", "Accepted", "Ready", "Preparing", "Delivered", "Canceled", "Completed"]}
              placeholder={""}
            />
            <Select
              label={"Server"}
              name={"server"}
              options={["Server 1", "Server 2"]}
              placeholder={""}
            />
            <Select
              label={"Section"}
              name={"section"}
              options={[1, 2]}
            />
            <Select
              label={"Table"}
              name={"server"}
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              placeholder={""}
            />
            <Select
              label={"Payment Status"}
              name={"paymentStatus"}
              options={['Paid', 'Pending']}
            />
            <Input
              label={"Discount"}
              name={"discount"}
              type={"discount"}
              placeholder={"Discount in $"}
            />
          </div>

          <div className="mb-2 mt-7 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className=" rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ">
              Cancel
            </button>
            <button
              onClick={() => { }}
              className="rounded-md bg-primary px-6 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Save
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default EditOrder