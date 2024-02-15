import React from "react"
import { IoMenu } from "react-icons/io5"
import help from "./../../assets/navbar/help.svg"
import { IoCartOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  let restaurentName = "Texas Grill House"
  const navigate = useNavigate()

  return (
    <nav className="flex items-center justify-between px-4">
      <div className="w-[60px]">
        <IoMenu className="h-6 w-6" />
      </div>
      <div className="rubik flex flex-1 justify-center text-lg font-semibold">
        {restaurentName}
      </div>
      <div className="flex w-[60px] items-center gap-3">
        <img src={help} className="h-5 w-6" alt="" srcset="" />
        <div
          onClick={() => {
            navigate("/cart")
          }}
          className="relative">
          <IoCartOutline className="h-6 w-6" />
          <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center  rounded-full bg-primary text-xs text-white">
            3
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
