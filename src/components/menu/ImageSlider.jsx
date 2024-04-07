import React, { useState } from "react"
import pictures from "../../assets/menu/pictures.png"
import { BiEdit } from "react-icons/bi"
import AddFeaturedItem from "./featuredItems/AddFeaturedItem"
import FeaturedItems from "./featuredItems/FeaturedItems"

const ImageSlider = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="relative">
      <img
        src={pictures}
        className="h-[230px] w-[44.65277777777778vw] rounded-2xl object-cover  "
        alt="logo"
      />
      <div className="absolute bottom-4 left-[50%] mx-auto flex translate-x-[-50%] gap-2">
        {[1, 2, 3].map((v, i) => (
          <div
            key={i}
            className={`h-[5px] w-[46px] rounded-[4px] bg-grey ${
              i === 0 && "bg-primary"
            }`}></div>
        ))}
      </div>
      <div
        onClick={() => setOpenModal(true)}
        className="absolute bottom-[-8px] right-[-10px] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-white">
        <BiEdit className="text-button" />
      </div>
      {openModal && <FeaturedItems setOpen={setOpenModal} />}
      {/* {openModal && <AddFeaturedItem setOpen={setOpenModal} />} */}
    </div>
  )
}

export default ImageSlider
