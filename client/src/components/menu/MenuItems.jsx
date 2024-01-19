import React from "react"
import menuItem from "../../assets/menu/menuItem.jpg"
import next from "../../assets/next.svg"

const MenuItems = () => {
  return (
    <div className="mt-8 flex flex-col">
      <div className="flex items-center justify-between">
        <span className="text-xl font-medium">Menu Items</span>
        <button className="h-[30px] rounded-lg bg-primary px-12 text-sm text-white hover:bg-primary/80">
          Add
        </button>
      </div>
      <div className="mt-28 grid flex-1 grid-cols-6 gap-x-6 gap-y-28">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(v => (
          <div className="shadow-cardMenu group relative flex cursor-pointer flex-col items-center justify-center rounded-lg bg-[#ffffff] p-2 transition-all duration-300 hover:bg-primary/70 hover:text-white">
            <img
              src={menuItem}
              className="shadow-navbar absolute left-1/2 top-[-30px] h-[100px] w-[85%] -translate-x-1/2 -translate-y-1/2 transform rounded-md object-cover"
              alt="item"
            />
            <span className="mt-6 font-semibold">Burger ‘Wanted’</span>
            <span className="mx-auto mt-2 w-[85%] text-sm text-grey group-hover:text-[white]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              neque?
            </span>
            <div className="mx-auto mt-4 h-[2px] w-[80%] bg-primary/80 group-hover:bg-white"></div>

            <div className="mb-1 flex w-[85%] justify-end ">
              <span className="mb-1 mt-2 font-semibold text-primary hover:font-bold group-hover:text-white">
                $35
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuItems
