import React from "react"
import next from "../../assets/next.svg"
import CategoryItems from "./CategoryItems"
import AddCategory from "./AddCategory"
import { useNavigate } from "react-router-dom"

const Categories = () => {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 gap-2">
          <span className="text-xl font-medium">Categories</span>
          <div className="flex cursor-pointer items-center gap-2">
            <span
              onClick={() => {
                navigate("/menu/categories")
              }}
              className="text-sm text-primary hover:text-primary/80">
              View All
            </span>
            <img src={next} alt="" />
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="h-[30px] rounded-lg bg-primary px-8 text-sm text-white hover:bg-primary/80">
          Add
        </button>
      </div>
      <CategoryItems />
      {open && <AddCategory setOpen={setOpen} />}
    </div>
  )
}

export default Categories
