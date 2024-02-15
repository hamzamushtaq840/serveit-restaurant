import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { IoChevronBackOutline } from "react-icons/io5"
import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"

const MenuItemDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="relative flex flex-col items-center xsm:items-start">
      <div className="relative flex w-[70%] flex-col items-center justify-center rounded-xl xsm:w-[100%] xsm:bg-white">
        {/* back button */}
        <div
          onClick={() => navigate(-1)}
          className="fixed left-3 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-white">
          <IoChevronBackOutline />
        </div>

        <img
          src={location?.state?.image}
          className="max-h-[400px] object-cover xsm:h-[277px] xsm:w-full"
          alt=""
        />
        <main className="w-[70%] py-8 xsm:w-full xsm:px-5">
          {/* item-details */}
          <section className="flex justify-between">
            <div>
              <p className="text-2xl font-bold">{location?.state?.name}</p>
              <p className="w-[90%] text-lg text-[#9C9C9C] xsm:text-sm">
                {location?.state?.desc}
              </p>
            </div>
            <span className="text-lg font-bold text-primary">
              ${location.state.price}
            </span>
          </section>

          {/* item-options */}
          <section className="shadow-itemOptions mt-8 rounded px-3 py-5">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex flex-col">
                <span className="font-semibold">Choose Size</span>
                <span className="text-xs text-primary">Select one</span>
              </div>
              <span className="rounded-full bg-primary px-3 py-1 text-sm text-white">
                Required
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="radio" name="" id="" />
                <span>Small</span>
              </div>
              <span>${location.state.price}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="radio" name="" id="" />
                <span>Medium</span>
              </div>
              <span>${location.state.price}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="radio" name="" id="" />
                <span>Large</span>
              </div>
              <span>${location.state.price}</span>
            </div>
          </section>

          {/* add-ons */}
          <section className="flex flex-col">
            <div className="mb-3 mt-4 flex items-center justify-between">
              <span className="font-semibold">Addon</span>
              <span className="rounded-full bg-greyBg px-3 py-1 text-sm text-ring text-white">
                Optional
              </span>
            </div>
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <span>Cheese</span>
              </div>
              <span>${location.state.price}</span>
            </div>
            <div className="mt-[6px] flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <span>Hot Sauce</span>
              </div>
              <span>${location.state.price}</span>
            </div>
            <div className="mt-[6px] flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <span>Cola - 500ml</span>
              </div>
              <span>${location.state.price}</span>
            </div>
          </section>
        </main>
      </div>
      {/* total */}
      <div
        style={{
          boxShadow: "0px -4px 11px 0px rgba(0,0,0,0.05)",
        }}
        className="shadow-itemsOptions sticky bottom-0 z-[50] flex h-[70px] w-[49.2%] bg-white xsm:left-0 xsm:w-full">
        <div className="flex items-center justify-center gap-2 rounded-full bg-white px-2 py-1">
          <button>
            <FaMinus className="h-3 w-3 text-primary" />
          </button>
          <span>4</span>
          <button className="h-8 w-8 rounded-full bg-primary">
            <FaPlus className="mx-auto h-3 w-3 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuItemDetail
