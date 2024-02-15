import React, { useState } from "react"
import Navbar from "../components/generic/Navbar"

import Categories from "../components/dashboard/Categories"
import SearchMenuItem from "../components/dashboard/SearchMenuItem"
import Menu from "../components/dashboard/Menu"

const Dashboard = () => {
  const [selected, setSelected] = useState("All")

  return (
    <div className="mt-6 flex flex-col py-4">
      <Navbar />
      <SearchMenuItem />
      <Categories selected={selected} setSelected={setSelected} />
      <h1 className="rubik mt-4 pl-4 text-base font-semibold">Menu Items</h1>
      <Menu />
    </div>
  )
}

export default Dashboard
