import React from "react"
import ImageSlider from "../components/menu/ImageSlider"
import Categories from "../components/menu/Categories"
import MenuItems from "../components/menu/MenuItems"

const Menu = () => {
  return (
    <div className="flex flex-col px-6 py-8">
      <div className="flex gap-10">
        <ImageSlider />
        <Categories />
      </div>
      <MenuItems />
    </div>
  )
}

export default Menu
