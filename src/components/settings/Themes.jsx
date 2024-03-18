import React from "react"
import Input from "../generic/Input"
import { BiEdit } from "react-icons/bi"
import logo from "../../assets/logo.svg"

const Themes = () => {
  const themes = [
    {
      primaryBg: "#EF9354",
      primary: "#EA6A11",
      secondary: "#FDF6E4",
    },
    {
      primaryBg: "#E0F0CA",
      primary: "#73B915",
      secondary: "#FFFFFF",
    },
    {
      primaryBg: "#FFFADD",
      primary: "#FFD80D",
      secondary: "#FFFFFF",
    },
    {
      primary: "#272D2F",
      primaryBg: "#EAF7FB",
      secondary: "#FFFFFF",
    },
    {
      primary: "#D70F65",
      primaryBg: "#FFE9F2",
      secondary: "#FFFFFF",
    },
  ]

  return (
    <div className="relative flex h-full flex-col gap-6 p-4">
      <div className="flex items-center gap-2">
        <label for="email" className="w-[15%] font-medium">
          Restaurant Logo
        </label>
        <span className="w-[5%]">:</span>
        <div className="w-full ">
          <div className="relative flex w-28 justify-center rounded-lg border py-3 ">
            <img src={logo} className="" alt="" />
            <div className="absolute bottom-[-10px] right-[-15px] flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <BiEdit className="text-button" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2">
        <label for="email" className="w-[15%] font-medium">
          Color Plates
        </label>
        <span className="w-[5%]">:</span>
        <div className="flex w-full gap-5">
          {themes.map(v => {
            return (
              <div className="flex h-28 w-28 cursor-pointer flex-col overflow-hidden rounded-md shadow-md">
                <div
                  style={{ backgroundColor: v.primary }}
                  className={`h-[40%] w-full`}></div>
                <div
                  style={{ backgroundColor: v.primaryBg }}
                  className={`h-[35%] w-full`}></div>
                <div
                  style={{ backgroundColor: v.secondary }}
                  className={`h-[30%] w-full`}></div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 right-4">
        <button
          onClick={() => {}}
          className="rounded-md bg-primary px-8 py-1 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          Save
        </button>
      </div>
    </div>
  )
}

export default Themes
