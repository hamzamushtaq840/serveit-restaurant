import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import CartItem from "../components/cart/CartItem"
import CustomTip from "../components/cart/CustomTip"
import OrderSummary from "../components/cart/OrderSummary"
import PaymentMethod from "../components/cart/PaymentMethod"
import PromoCode from "../components/cart/PromoCode"
import TopBar from "../components/generic/TopBar"
import { cartItems } from "../utils/constants"
import SelectTip from "../components/cart/SelectTip"
import SplitBill from "../components/cart/SplitBill"

const Cart = () => {
  const [selectedDiscount, setSelectedDiscount] = useState(0)
  const [customTip, setCustomTip] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="pt-4 xsm:pt-0">
      <TopBar content={"My Cart"} />
      <div className="rounded-2 mt-20 flex flex-col gap-2 px-4">
        {cartItems.map(v => (
          <CartItem item={v} />
        ))}
      </div>

      <section className="flex items-center justify-between p-4">
        <span onClick={() => { navigate('/rewards') }} className="rubik text-sm text-primary">
          Add items with points
        </span>
        <span className="font-semibold">
          Points: <span>456</span>
        </span>
      </section>

      {/* payment method */}
      <PaymentMethod />

      {/* promo code */}
      <PromoCode />

      {/* select tip discounts */}
      <SelectTip selectedDiscount={selectedDiscount} setSelectedDiscount={setSelectedDiscount} />

      {/* custom tip */}
      <CustomTip customTip={customTip} setSelectedDiscount={setSelectedDiscount} setCustomTip={setCustomTip} />

      {/* split bill */}
      <SplitBill />

      {/* order summary */}
      <OrderSummary />

      <div className="m-5 flex h-10 items-center">
        <button
          onClick={() => {
            navigate("/add-card")
          }}
          className="rubik text-button h-[54px] w-full rounded-lg bg-primary text-lg font-bold">
          Done
        </button>
      </div>
    </div>
  )
}

export default Cart
