import { Route, Routes } from "react-router-dom"
import AuthGuard from "./guards/AuthGuard"
import Dashboard from "./pages/Dashboard"
import ForgotPassword from "./pages/ForgotPassword"
import Login from "./pages/Login"
import ResetPassword from "./pages/ResetPassword"
import Signup from "./pages/Signup"
import Navbar from "./components/generic/Navbar"
import Menu from "./pages/Menu"

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
        </Route>
      </Route>
    </Routes>
  )
}

export default App
