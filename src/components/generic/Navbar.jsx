import React, { useEffect, useState } from "react"
import { NavLink, Outlet, useLocation } from "react-router-dom"
import logo from "./../../assets/logo.svg"
import avatar from "./../../assets/avatar.svg"
import { trimmedName } from "../../utils/trimLocationName"
import { navItems } from "../../utils/navItems"

const Navbar = () => {
  const location = useLocation()

  return (
    <div className="flex min-h-[100vh] bg-secondary">
      <nav className="fixed bottom-4 left-4 top-4 w-[250px] overflow-auto rounded-lg bg-white px-4 shadow-navbar">
        <img src={logo} className="mx-auto my-3 h-[60px]" alt="" />
        <hr />
        <div className="gap flex w-full flex-col gap-1 p-2">
          {navItems.map((v, i) => {
            return (
              <NavLink
                key={i}
                to={v.to}
                className={({ isActive }) =>
                  (isActive
                    ? "active bg-primary bg-opacity-[0.10] fill-primary font-semibold text-primary duration-500"
                    : "text-[#6B6B6B] hover:bg-[#cecece3f]") +
                  " flex items-center gap-2 rounded-md p-3 font-medium transition-all"
                }>
                {v.image}
                {v.name}
              </NavLink>
            )
          })}
        </div>
      </nav>
      <main className="ml-[266px] flex max-w-[calc(100vw-266px)] flex-1 flex-col ">
        <header
          className={`sticky top-0 z-30 flex h-[69px] items-center justify-between border-b border-[#D3D3D3] bg-secondary p-6 shadow-sm`}>
          <span className="text-xl font-medium">
            {trimmedName(location.pathname)}
          </span>
          <div className="flex gap-2">
            <img
              className="h-[33px] w-[33px] rounded-full"
              src={avatar}
              alt="profile"
            />
            <div className="flex flex-col">
              <span className="text-sm">Josh Radford</span>
              <span className="text-xs text-grey">Admin</span>
            </div>
          </div>
        </header>
        <Outlet />
      </main>
    </div>
  )
}

export default Navbar
