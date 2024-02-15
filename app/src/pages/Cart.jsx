import React from "react"
import TopBar from "../components/generic/TopBar"
import { cartItems } from "../utils/constants"
import CartItem from "../components/cart/CartItem"

const Cart = () => {
  return (
    <div className="pt-4 xsm:pt-0">
      <TopBar content={"My Cart"} />
      <div className="rounded-2 mt-4 flex flex-col gap-2 px-4">
        {cartItems.map(v => (
          <CartItem item={v} />
        ))}
      </div>
    </div>
  )
}

export default Cart
