import { Route, Routes } from "react-router-dom"
import ForgotPassword from "./pages/ForgotPassword"
import Login from "./pages/Login"
import ResetPassword from "./pages/ResetPassword"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password/:code" element={<ResetPassword />} />

      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
