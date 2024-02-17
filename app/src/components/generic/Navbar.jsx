import React, { useState } from "react"
import { IoMenu } from "react-icons/io5"
import help from "./../../assets/navbar/help.svg"
import { IoCartOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { RxCross2 } from "react-icons/rx"

const Navbar = () => {
  let restaurentName = "Texas Grill House"
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="fixed top-0 z-[80] flex w-full items-center justify-between bg-white px-4 pb-4 pt-3">
      <div onClick={() => setShowMenu(!showMenu)} className="w-[60px]">
        <IoMenu className="h-6 w-6" />
      </div>
      <div
        onClick={() => navigate("/dashboard")}
        className="flex flex-1 justify-center text-lg font-semibold">
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

      <aside
        className={`absolute left-0 top-0 z-10 h-screen w-[232px] bg-white p-4 ${showMenu ? "left-0" : "left-[-242px]"} transition-all duration-500`}>
        <div className="flex justify-end text-red-500">
          <button onClick={() => setShowMenu(false)}>
            <RxCross2 className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-3 px-4">
          <p
            className="text-xl font-bold text-primary"
            onClick={() => navigate("/orders")}>
            My Orders
          </p>
          <p
            className="text-xl font-bold text-primary"
            onClick={() => navigate("/rewards")}>
            Rewards
          </p>
          <p
            className="text-xl font-bold text-primary"
            onClick={() => navigate("/payments")}>
            Payments
          </p>
          <p
            className="text-xl font-bold text-primary"
            onClick={() => {
              navigate("/reviews")
            }}>
            Reviews
          </p>
          <p className="text-xl font-bold text-primary">Help</p>
          <p
            className="text-xl font-bold text-primary"
            onClick={() => {
              navigate("/profile")
            }}>
            Profile
          </p>
          <p
            className="text-xl font-bold text-primary"
            onClick={() => navigate("/")}>
            Logout
          </p>
        </div>
      </aside>
    </nav>
  )
}

export default Navbar
