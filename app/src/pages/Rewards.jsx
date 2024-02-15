import React from "react"
import Menu from "../components/dashboard/Menu"
import Navbar from "../components/generic/Navbar"

const Rewards = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-8 mt-16 flex items-center justify-center">
        <span className=" text-2xl font-semibold text-grey">
          Points : <span className="text-4xl text-primary">456</span>
        </span>
      </div>
      <Menu />
    </div>
  )
}

export default Rewards
