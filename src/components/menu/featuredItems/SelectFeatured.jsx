import { Form, Formik } from "formik"
import React, { useState } from "react"
import { IoMdClose } from "react-icons/io"
import Select from "react-select"
import { addCategory } from "../../../utils/schema"
import Input from "../../generic/Input"

const SelectFeatured = ({ setCurrentTab, setOpen }) => {
  const items = [
    {
      itemAssigned: true,
      item: {
        name: "Burger 'Wanted'",
        imageUrl: "https://source.unsplash.com/random/300x300",
      },
    },
    {
      itemAssigned: true,
      item: {
        name: "Burger 'Wanted'",
        imageUrl: "https://source.unsplash.com/random/300x300",
      },
    },
    {
      itemAssigned: false,
      item: {},
    },
  ]

  return (
    <>
      <header className="border-b p-5">
        <h1 className="text-xl font-bold">Featured Items</h1>
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 hover:bg-secondary">
          <IoMdClose className="h-[20px] w-[20px]" />
        </button>
      </header>
      <body className="flex flex-col p-6">
        <div className="divide- flex flex-col gap-3 divide-y-[1.5px]">
          <div className="grid grid-cols-3 py-2">
            <span className="text-center font-semibold">#</span>
            <span className="text-center font-semibold">Name</span>
            <span className="text-center font-semibold">Action</span>
          </div>
          {items.map((v, i) => {
            return (
              <div className="grid grid-cols-3  py-1 pt-3">
                <span className="text-center font-semibold">{i + 1}</span>
                <span className="text-center font-semibold">
                  {v?.item?.name ? v?.item?.name : "-"}
                </span>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setCurrentTab("add")}
                    className="rounded bg-primary px-8 py-1 text-center font-semibold text-white">
                    {v?.itemAssigned ? "Edit" : "Add"}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </body>
      <div className="my-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className=" rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ">
          Close
        </button>
      </div>
    </>
  )
}

export default SelectFeatured
