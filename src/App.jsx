import { Route, Routes } from "react-router-dom"
import AuthGuard from "./guards/AuthGuard"
import ChairManager from "./pages/ChairManager"
import Customers from "./pages/Customers"
import Dashboard from "./pages/Dashboard"
import Employees from "./pages/Employees"
import ForgotPassword from "./pages/ForgotPassword"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import Orders from "./pages/Orders"
import ResetPassword from "./pages/ResetPassword"
import Reviews from "./pages/Reviews"
import Rewards from "./pages/Rewards"
import Settings from "./pages/Settings"
import Signup from "./pages/Signup"
import TableManager from "./pages/TableManager"
import TimeSheet from "./pages/TimeSheet"
import TipsManager from "./pages/TipsManager"
import Inventory from "./pages/Inventory"
import AllCategories from "./components/menu/AllCategories"
import Tables from "./pages/Tables"
import Navbar from "./components/navbar/Navbar"
import TableManagerEdit from "./pages/TableManagerEdit"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:code" element={<ResetPassword />} />

      <Route element={<AuthGuard />}>
        <Route element={<Navbar />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="menu" element={<Menu />} />
          <Route path="menu/categories" element={<AllCategories />} />
          <Route path="tips-manager" element={<TipsManager />} />

          <Route path="/tables">
            <Route index element={<Tables />} />
            <Route path="manager" element={<TableManager />} />
            <Route path="manager/edit" element={<TableManagerEdit />} />
          </Route>

          <Route path="chair-manager" element={<ChairManager />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="employees" element={<Employees />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="timesheet" element={<TimeSheet />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
