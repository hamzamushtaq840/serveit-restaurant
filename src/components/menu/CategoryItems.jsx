import React from "react"
import menuItem from "../../assets/menu/menuItem.jpg"
import next from "../../assets/next.svg"

const CategoryItems = () => {
  return (
    <div className="mt-10 grid flex-1 grid-cols-4 gap-4">
      {[1, 2, 3, 4].map(v => (
        <div className="group flex cursor-pointer flex-col items-center justify-center rounded-lg bg-[#ffffff] p-2 shadow-card transition-all duration-300 hover:bg-primary/70 hover:text-white">
          <img
            src={menuItem}
            className="h-[61px] w-full rounded-md object-cover"
            alt="item"
          />
          <span className="rubik mt-4 font-medium">Fruits</span>
          <div className="mx-auto mt-2 h-[2px] w-[80%] bg-primary/80 group-hover:bg-white"></div>
          <img src={next} alt="item" className="mt-3 w-[20px]" />
        </div>
      ))}
    </div>
  )
}

export default CategoryItems
