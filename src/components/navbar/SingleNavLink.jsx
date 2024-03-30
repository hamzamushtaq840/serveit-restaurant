import React, { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io"

const SingleNavLink = ({ v, i }) => {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <div>
      <NavLink
        key={i}
        to={v.to}
        className={({ isActive }) =>
          (isActive
            ? "active bg-primary bg-opacity-[0.10] fill-primary font-semibold text-primary duration-500"
            : "text-[#6B6B6B] hover:bg-[#cecece3f]") +
          " realtive flex items-center gap-2 rounded-md p-3 font-medium transition-all"
        }>
        {v.image}
        {v.name}
        {v.children && (
          <div
            className={`${
              open && "duration-300` rotate-180 transition-all"
            } absolute right-8 hover:text-primary/60`}
            onClick={() => {
              setOpen(!open)
            }}>
            <IoIosArrowDown />
          </div>
        )}
      </NavLink>

      {v?.children && location.pathname.includes(v.to) && open && (
        <div className="mt-2 flex flex-col">
          {v.children.map((vv, ii) => {
            return (
              <NavLink
                key={ii}
                to={vv.to}
                className={({ isActive }) =>
                  (isActive
                    ? "active bg-primary bg-opacity-[0.10] fill-primary font-semibold text-primary duration-500"
                    : "text-[#6B6B6B] hover:bg-[#cecece3f]") +
                  " ml-6 flex items-center gap-2 rounded-md px-3 py-2 transition-all"
                }>
                {vv.image}
                {vv.name}
              </NavLink>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SingleNavLink
