import React, { useEffect, useRef, useState } from "react"
import { IoMenu } from "react-icons/io5"
import help from "./../../assets/navbar/help.svg"
import { IoCartOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { RxCross2 } from "react-icons/rx"
import { AiOutlineGift } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { IoMdCard } from "react-icons/io";
import { HiOutlineStar } from "react-icons/hi2"
import { FaRegUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  let restaurentName = "Texas Grill House"
  const sideNavRef = useRef(null)
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    function handleScroll() {
      setShowMenu(false);
    }

    // Add event listener to the document object for mousedown
    document.addEventListener("mousedown", handleClickOutside);
    // Add event listener to the window object for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-[80] flex w-full items-center justify-between bg-white px-4 pb-4 pt-3">
      <div onClick={() => setShowMenu(!showMenu)} className="w-[60px]">
        <IoMenu className="h-6 w-6 cursor-pointer hover:text-grey" />
      </div>
      <div
        onClick={() => navigate("/dashboard")}
        className="flex flex-1 justify-center text-lg font-semibold hover:underline cursor-pointer">
        {restaurentName}
      </div>
      <div className="flex w-[60px] items-center gap-3">
        <img src={help} className="h-5 w-6" alt="" srcset="" />
        <div
          onClick={() => {
            navigate("/cart")
          }}
          className="relative">
          <IoCartOutline className="h-6 w-6 hover:text-grey cursor-pointer" />
          <div className="text-button absolute -right-1 -top-1 flex h-4 w-4 items-center  justify-center rounded-full bg-primary text-xs">
            3
          </div>
        </div>
      </div>

      {showMenu && <div
        className={`absolute top-0 z-30 h-screen w-[100vw] backdrop-blur-sm	p-4 left-0`}
      ></div>}
      <aside
        ref={sideNavRef}
        className={`absolute left-0 top-0 z-40 h-screen w-[232px] shadow-2xl bg-white p-4 ${showMenu ? "left-0" : "left-[-242px]"} transition-all duration-500`}>
        <div className="flex ml-3 justify-between">
          <h1 className="text-2xl font-extrabold">LOGO</h1>
          <button className="text-red-500 h-6 w-6 flex justify-center items-center rounded-md bg-red-200 " onClick={() => setShowMenu(false)}>
            <RxCross2 className="h-4 w-4  " />
          </button>
        </div>
        <hr className="my-5" />
        <div className="flex flex-col gap-1 px-2">
          <p
            className="text-xl hover:bg-primaryBg py-2 cursor-pointer flex items-center gap-3 px-1 rounded-lg font-medium text-black"
            onClick={() => navigate("/orders")}>
            <div className="w-[25px] flex justify-center">
              <BsCardChecklist className="h-5 w-5" />
            </div>
            My Orders
          </p>
          <p
            className="text-xl hover:bg-primaryBg py-2 cursor-pointer flex items-center gap-3 px-1 rounded-lg font-medium text-black"
            onClick={() => navigate("/rewards")}>
            <div className="w-[25px] flex justify-end">
              <AiOutlineGift className="h-6 w-6" />
            </div>
            Rewards
          </p>
          <p
            className="text-xl hover:bg-primaryBg py-2 cursor-pointer flex items-center gap-3 px-1 rounded-lg font-medium text-black"
            onClick={() => navigate("/payments")}>
            <div className="w-[25px] flex justify-end">
              <IoMdCard className="h-6 w-6" />
            </div>
            Payments
          </p>
          <p
            className="text-xl hover:bg-primaryBg py-2 cursor-pointer flex items-center gap-3 px-1 rounded-lg font-medium text-black"
            onClick={() => navigate("/reviews")}>
            <div className="w-[25px] flex justify-end">
              <HiOutlineStar className="h-6 w-6" />
            </div>
            Reviews
          </p>
          <p
            className="text-xl hover:bg-primaryBg py-2 cursor-pointer flex items-center gap-3 px-1 rounded-lg font-medium text-black"
          // onClick={() => navigate("/reviews")}
          >
            <div className="w-[25px] flex justify-end">
              <img src={help} className="h-6 w-6" alt="" srcset="" />
            </div>
            Help
          </p>
          <p
            className="text-xl hover:bg-primaryBg py-2 cursor-pointer flex items-center gap-3 px-1 rounded-lg font-medium text-black"
            onClick={() => navigate("/profile")}>
            <div className="w-[25px] flex justify-center">
              <FaRegUser className="h-5 w-5" />
            </div>
            Profile
          </p>
          <p
            className="text-xl hover:bg-primaryBg py-2 cursor-pointer flex items-center gap-3 px-1 rounded-lg font-medium text-black"
            onClick={() => navigate("/")}>
            <div className="w-[25px] flex justify-end">
              <MdLogout className="h-6 w-6" />
            </div>
            Logout
          </p>
        </div>
      </aside>
    </nav>
  )
}

export default Navbar
