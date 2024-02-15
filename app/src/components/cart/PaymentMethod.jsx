import React from "react"
import wallet from "./../../assets/cart/wallet.png"
import { useNavigate } from "react-router-dom"

const PaymentMethod = () => {
  const navigate = useNavigate()

  return (
    <section className="mx-4 mb-6 flex items-start rounded p-4 shadow-itemOptions">
      <img src={wallet} className="h-6 w-6" alt="" />
      <div className="ml-3 flex flex-1 flex-col">
        <span className="font-semibold">Payment method</span>
        <span className="text-sm text-grey">Cash</span>
      </div>
      <div
        onClick={() => {
          navigate("/select-method")
        }}
        className="self-center text-primary">
        Select
      </div>
    </section>
  )
}

export default PaymentMethod
