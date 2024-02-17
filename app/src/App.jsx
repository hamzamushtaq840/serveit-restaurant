import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import OrderDetail from "./pages/OrderDetail"
import Cart from "./pages/Cart"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import MenuItemDetail from "./pages/MenuItemDetail"
import Orders from "./pages/Orders"
import Payments from "./pages/Payments"
import Profile from "./pages/Profile"
import Rewards from "./pages/Rewards"
import SelectMethod from "./pages/SelectMethod"
import Signup from "./pages/Signup"
import Reviews from "./pages/Reviews"

function App() {
  useEffect(() => {
    const setThemeColors = () => {
      document.documentElement.style.setProperty("--theme-primaryBg", "#FDF6E4")
      document.documentElement.style.setProperty("--theme-primary", "#EA6A11")
      document.documentElement.style.setProperty(
        "--theme-primarySub",
        "#E99A63"
      )
      document.documentElement.style.setProperty("--theme-secondary", "#FDF5EA")
      document.documentElement.style.setProperty("--theme-focus", "#eda677")
      document.documentElement.style.setProperty("--theme-ring", "#9E9E9E")
      document.documentElement.style.setProperty("--theme-grey", "#9E9E9E")
      document.documentElement.style.setProperty("--theme-greyBg", "#F4F4F4")
    }

    setThemeColors()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/item-detail" element={<MenuItemDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/select-method" element={<SelectMethod />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/order-summary" element={<OrderDetail />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  )
}

export default App
