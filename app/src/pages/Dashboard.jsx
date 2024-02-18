import React, { useState } from "react"
import Navbar from "../components/generic/Navbar"

import Categories from "../components/dashboard/Categories"
import FeaturedMenuItems from "../components/dashboard/FeaturedMenuItems"
import Menu from "../components/menu/Menu"
import SearchMenuItem from "../components/menu/SearchMenuItem"

const Dashboard = () => {
  const [selected, setSelected] = useState("All")

  return (
    <div className="mt-7 flex flex-col py-4">
      <Navbar />
      <SearchMenuItem />
      <FeaturedMenuItems />
      <Categories selected={selected} setSelected={setSelected} />
      <h1 className="rubik mt-4 pl-4 text-base font-semibold">Menu Items</h1>
      <Menu />
    </div>
  )
}

export default Dashboard
