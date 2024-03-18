import React from "react"
import Input from "../generic/Input"
import { GoCopy } from "react-icons/go"
import { MdDeleteOutline } from "react-icons/md"

const PromoDiscount = () => {
  return (
    <div className="relative flex h-full flex-col gap-6 p-4">
      {[1, 2, 3].map((v, i) => {
        return (
          <div className="flex items-center gap-2">
            <label for="email" className="mt-5 w-[15.5%] font-medium">
              Promo Code &nbsp;&nbsp;<span>{i + 1}</span>
            </label>
            <span className="mt-5 w-[5%]">:</span>
            <div className="flex w-full gap-3">
              <Input
                label={"Discount Code"}
                name={"email"}
                type={"email"}
                placeholder={"Enter Discount Code"}
                width={"33%"}
              />
              <Input
                label={"Amount"}
                name={"email"}
                type={"email"}
                placeholder={"Amount"}
                width={"33%"}
              />
              <Input
                label={"Order Above"}
                name={"email"}
                type={"email"}
                placeholder={"Amount"}
                width={"33%"}
                optional={""}
              />
            </div>
            <MdDeleteOutline
              title="Delete"
              className="mt-6 h-8 w-8 cursor-pointer text-red-500 hover:text-red-400"
            />
          </div>
        )
      })}
      <div className="flex cursor-pointer justify-end font-medium text-primary hover:underline">
        Add another promo
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

export default PromoDiscount
