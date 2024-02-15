import React from "react"
import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const MenuItem = ({ item, index }) => {
  const addedToCart = Array.from({ length: 6 }, () => Math.random() < 0.5)
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate("/item-detail", { state: item })}
      className="cursor-pointer overflow-hidden rounded-xl bg-greyBg hover:bg-primaryBg">
      <img src={item.image} className="flex w-full justify-center" alt="" />
      <div className="px-5 py-3">
        <p className="rubik font-semibold">{item.name}</p>
        <p className="rubik text-xs text-[#9C9C9C]">{item.desc}</p>
        <p className="mt-1 text-sm">{item.category}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-semibold text-primary">${item.price}</p>

          {!addedToCart[index] && (
            <div className="flex h-[32px] items-center">
              <button className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white">
                <FaPlus className="h-3 w-3 text-primary" />
              </button>
            </div>
          )}

          {addedToCart[index] && (
            <div className="flex items-center justify-center gap-2 rounded-full bg-white px-2 py-1">
              <button>
                <FaMinus className="h-3 w-3 text-primary" />
              </button>
              <span>4</span>
              <button>
                <FaPlus className="h-3 w-3 text-primary" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MenuItem
