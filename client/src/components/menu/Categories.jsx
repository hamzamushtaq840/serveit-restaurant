import React from "react"
import next from "../../assets/next.svg"
import CategoryItems from "./CategoryItems"

const Categories = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 gap-2">
          <span className="text-xl font-medium">Categories</span>
          <div className="flex cursor-pointer items-center gap-2">
            <span className="text-sm text-primary hover:text-primary/80">
              View All
            </span>
            <img src={next} alt="" />
          </div>
        </div>
        <button className="h-[30px] rounded-lg bg-primary px-8 text-sm text-white hover:bg-primary/80">
          Add
        </button>
      </div>
      <CategoryItems />
    </div>
  )
}

export default Categories
