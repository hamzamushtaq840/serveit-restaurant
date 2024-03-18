import React from "react"
import { FiEdit } from "react-icons/fi"
import { MdOutlineFastfood } from "react-icons/md"
import menuItem from "../../assets/menu/menuItem.jpg"
import arrowDown from "../../assets/arrowDown.svg"
import filter from "../../assets/filter.svg"

const MenuItems = () => {
  return (
    <div className="mt-8 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <span className="text-xl font-medium">Menu Items</span>
          <div className="flex gap-1">
            <img src={filter} alt="" srcset="" />
            <img src={arrowDown} alt="" srcset="" />
          </div>
        </div>
        <button className="h-[30px] rounded-lg bg-primary px-12 text-sm text-white hover:bg-primary/80">
          Add
        </button>
      </div>
      <div className="mt-28 grid flex-1 grid-cols-5 gap-x-6 gap-y-28">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(v => (
          <div className="group relative flex cursor-pointer flex-col items-center justify-center rounded-lg bg-[#ffffff] p-2 shadow-cardMenu transition-all duration-150 hover:scale-[1.07] hover:bg-primarySub">
            <img
              src={menuItem}
              className="absolute left-1/2 top-[-30px] h-[100px] w-[85%] -translate-x-1/2 -translate-y-1/2 transform rounded-md object-cover shadow-navbar"
              alt="item"
            />
            <span className="mt-6 font-semibold group-hover:text-white">
              Burger ‘Wanted’
            </span>
            <span className="mt-1 flex items-center gap-1 text-xs font-medium text-black/85 group-hover:text-white">
              <MdOutlineFastfood className="h-[15px] w-[18px] text-primary group-hover:text-white" />
              <span>Fast Food</span>
            </span>
            <span className="mx-auto mt-2 w-[85%] text-sm text-grey group-hover:text-white/80">
              Lorem ipsum dolor sit amet consectetur neque?
            </span>
            <div className="mx-auto mb-3 mt-4 h-[2px] w-[85%] bg-grey/80 group-hover:bg-[#e3e2e2]"></div>
            <div className="mb-2 flex w-[85%] justify-between ">
              <span className="font-semibold text-primary group-hover:text-white">
                $35
              </span>
              <div
                title="Edit"
                className="rounded p-1 text-primary hover:text-black group-hover:text-white">
                <FiEdit />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuItems
