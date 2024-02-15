import React, { useState } from "react"
import Navbar from "../components/generic/Navbar"

import Categories from "../components/dashboard/Categories"
import SearchMenuItem from "../components/dashboard/SearchMenuItem"
import Menu from "../components/dashboard/Menu"

const Dashboard = () => {
  const [selected, setSelected] = useState("All")

  return (
    <div className="flex flex-col py-4">
      <Navbar />
      <SearchMenuItem />
      <Categories selected={selected} setSelected={setSelected} />
      <Menu />
    </div>
  )
}

export default Dashboard
