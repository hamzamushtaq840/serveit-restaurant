import React from "react"

const Settings = () => {
  return (
    <div className="mx-5 my-4 flex h-full flex-col gap-6 ">
      <div className="mt-3 grid grid-cols-6 divide-x-2 divide-[#cccccc66] text-[#9E9E9E] shadow">
        <div className="cursor-pointer bg-white py-3 text-center text-primary">
          General
        </div>
        <div className="cursor-pointer bg-white py-3 text-center hover:text-primary">
          Themes
        </div>
        <div className="cursor-pointer bg-white py-3 text-center hover:text-primary">
          Payment Gateway
        </div>
        <div className="cursor-pointer bg-white py-3 text-center hover:text-primary">
          Tax Percentage
        </div>
        <div className="cursor-pointer bg-white py-3 text-center hover:text-primary">
          Promo Discount
        </div>
        <div className="cursor-pointer bg-white py-3 text-center hover:text-primary">
          Reviews
        </div>
      </div>

      <div className="flex-1 bg-white p-6 shadow-lg">Settings</div>
    </div>
  )
}

export default Settings
