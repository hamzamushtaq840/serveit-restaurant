import React, { useState } from "react"
import { RxCross2 } from "react-icons/rx"
import CartItem from "../components/cart/CartItem"
import CustomTip from "../components/cart/CustomTip"
import TopBar from "../components/generic/TopBar"
import { cartItems } from "../utils/constants"
import PaymentMethod from "../components/cart/PaymentMethod"

const Cart = () => {
  const [selectedDiscount, setSelectedDiscount] = useState(15)
  const [customTip, setCustomTip] = useState(false)

  return (
    <div className="pt-4 xsm:pt-0">
      <TopBar content={"My Cart"} />
      <div className="rounded-2 mt-4 flex flex-col gap-2 px-4">
        {cartItems.map(v => (
          <CartItem item={v} />
        ))}
      </div>
      <section className="flex items-center justify-between p-4">
        <span className="rubik text-sm text-primary">
          Add items with points
        </span>
        <span className="font-semibold">
          Points: <span>456</span>
        </span>
      </section>

      {/* items */}
      <section className="grid grid-cols-3 gap-2 px-4">
        {[15, 20, 25].map(v => (
          <div
            onClick={() => {
              setSelectedDiscount(v)
            }}
            className={`relative flex h-16 flex-col items-center justify-center rounded border-[0.5px] ${selectedDiscount === v ? "border-primary bg-primaryBg" : "border-[#9B9B9B] bg-[#FAFBFD]"} font-semibold`}>
            <span className="text-primary">{v}%</span>
            <span className="text-xs font-normal text-grey">$3.34</span>
            {selectedDiscount === v && (
              <RxCross2 className="absolute right-1 top-1 h-4 w-4 text-red-500" />
            )}
          </div>
        ))}
      </section>

      {/* custom tip */}
      <CustomTip customTip={customTip} setCustomTip={setCustomTip} />

      {/* payment-method */}
      <PaymentMethod />
    </div>
  )
}

export default Cart
