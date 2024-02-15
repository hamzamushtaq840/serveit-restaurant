import React from "react"
import { IoChevronBackCircleOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

const TopBar = ({ content }) => {
  const navigate = useNavigate()

  return (
    <div className="shadow-topBar fixed top-0 z-[80] flex w-full items-center justify-between bg-white px-4 pb-4 pt-3">
      <div className="w-[60px]">
        <IoChevronBackCircleOutline
          className="h-6 w-6"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="flex-1 text-center">
        <p className=" text-lg font-bold">{content}</p>
      </div>
      <div className="w-[60px]"></div>
    </div>
  )
}

export default TopBar
