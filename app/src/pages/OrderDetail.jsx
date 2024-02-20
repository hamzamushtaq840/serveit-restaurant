import React from "react"
import { TbBellRinging } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
import TopBar from "../components/generic/TopBar"
import { FaRegListAlt } from "react-icons/fa"

const OrderDetail = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col">
      <TopBar content={"My Orders"} />
      <div className="mx-5 mt-20 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Order ID : #7823H </h1>
          <h1
            className="cursor-pointer text-sm text-primary hover:underline"
            onClick={() => {
              navigate("/dashboard")
            }}>
            Texas Grill House
          </h1>
          <h1 className="text-sm text-[#A3A3A3]">Date: 2/13/2024 - 13:33</h1>
        </div>

        <div className="flex flex-col">
          <button className="text-button flex items-center justify-center gap-1 rounded bg-primary px-2 py-2">
            <TbBellRinging className="h-5 w-5" />
            <span>Call Waiter</span>
          </button>
        </div>
      </div>
      <section>
        <div className="m-5 flex items-center gap-2">
          <FaRegListAlt className="h-5 w-5 text-primary" />
          <h1 className="rubik text-xl font-bold">Order Summary</h1>
        </div>

        <div className="mx-5 mb-8 mt-1 flex flex-col items-start gap-2 rounded p-4 shadow-itemOptions">
          <div className="flex w-full items-center justify-between">
            <span className="rubik">Burger ‘Wanted’</span>
            <span className="rubik font-bold">$17</span>
          </div>{" "}
          <div className="flex w-full items-center justify-between">
            <span className="rubik">Burger</span>
            <span className="rubik font-bold">$167</span>
          </div>{" "}
          <div className="flex w-full items-center justify-between">
            <span className="rubik">Pizza (Medium)</span>
            <span className="rubik font-bold">$167</span>
          </div>{" "}
          <div className="flex w-full items-center justify-between">
            <span className="rubik">Soft Drink</span>
            <span className="rubik font-bold">$167</span>
          </div>{" "}
          <div className="flex w-full items-center justify-between">
            <span className="rubik">Cake</span>
            <span className="rubik font-bold">$167</span>
          </div>{" "}
          <div className="flex w-full items-center justify-between">
            <span className="rubik">Chicken</span>
            <span className="rubik font-bold">$167</span>
          </div>
          <div className="my-2 h-[1px] w-full bg-[#9B9B9B]"></div>
          <div className="flex w-full items-center justify-between">
            <span className="rubik">Subtotal</span>
            <span className="rubik font-bold">$167</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="rubik">Tax (10%)</span>
            <span className="rubik font-bold">$5</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="rubik">Tip</span>
            <span className="rubik font-bold">$7</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="rubik">Promo Discount</span>
            <span className="rubik font-bold">-$67</span>
          </div>
          <div className="mt-2 h-[1px] w-full bg-[#9B9B9B]"></div>
          <div className="mt-3 flex w-full items-center justify-between">
            <span className="rubik font-bold">Total</span>
            <span className="rubik font-bold">$100</span>
          </div>
          <div className="mt-2 flex w-full items-center justify-between">
            <span className="rubik font-bold">Paid With</span>
            <span className="rubik ">Cash</span>
            <span className="rubik text-[#edbb32]">Pending</span>
          </div>
        </div>
      </section>
      <button className="rubik text-button mx-5 rounded-lg bg-primary py-3 mb-4">
        Cancel Order
      </button>
    </div>
  )
}
export default OrderDetail
