import React from "react"
import Switch from "react-switch"

const Reviews = () => {
  return (
    <div className="relative flex h-full flex-col gap-6 p-4">
      <div className="flex items-center gap-2">
        <label for="email" className="w-[17%] font-medium">
          Card Payment
        </label>
        <span className="w-[5%]">:</span>
        <div className="w-full">
          <Switch
            onColor="#EA6A11"
            onHandleColor="#FDF6E4"
            handleDiameter={20}
            uncheckedIcon={false}
            width={30}
            height={10}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            className="react-switch "
            id="material-switch"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <label for="email" className="w-[17%] font-medium">
          Demo Mode
        </label>
        <span className="w-[5%]">:</span>
        <div className="w-full">
          <Switch
            onColor="#EA6A11"
            onHandleColor="#FDF6E4"
            handleDiameter={20}
            uncheckedIcon={false}
            width={30}
            height={10}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            className="react-switch "
            id="material-switch"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <label for="email" className="w-[17%] font-medium">
          Stripe Key &nbsp; (Demo)
        </label>
        <span className="w-[5%]">:</span>
        <input
          type="text"
          className={`w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
        />
      </div>
      <div className="flex items-center gap-2">
        <label for="email" className="w-[17%] font-medium">
          Stripe Secret &nbsp;(Demo)
        </label>
        <span className="w-[5%]">:</span>
        <input
          type="text"
          className={`w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
        />
      </div>
      <div className="flex items-center gap-2">
        <label for="email" className="w-[17%] font-medium">
          Stripe Key &nbsp;(Live)
        </label>
        <span className="w-[5%]">:</span>
        <input
          type="text"
          className={`w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
        />
      </div>
      <div className="flex items-center gap-2">
        <label for="email" className="w-[17%] font-medium">
          Stripe Secret &nbsp; (Live)
        </label>
        <span className="w-[5%]">:</span>
        <input
          type="text"
          className={`w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
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

export default Reviews
