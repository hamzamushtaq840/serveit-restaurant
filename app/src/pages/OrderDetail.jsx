import React from "react"
import { TbBellRinging } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
import TopBar from "../components/generic/TopBar"
import OrderSummary from "../components/orders/OrderSummary"

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
      <OrderSummary />
      <button className="rubik text-button mx-5 rounded-lg bg-primary py-3">
        Cancel Order
      </button>
    </div>
  )
}
export default OrderDetail
