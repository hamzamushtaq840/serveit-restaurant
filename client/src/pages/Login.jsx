import React from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import Input from "../components/generic/Input"
import background from "./../assets/login/background.png"
import google from "./../assets/login/google.svg"
import logo from "./../assets/logo.svg"

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="flex h-[100vh] bg-primaryBg ">
      {/* left-section */}
      <div className="flex h-full w-[40%] items-center justify-center p-6">
        {/* card */}
        <div className="z-20 flex h-full max-h-[802px] w-[90%] min-w-[401px] flex-col items-center rounded-2xl bg-white shadow-login">
          <img src={logo} className="mb-8 mt-[7%]" alt="" />
          <p className=" mb-4 text-4xl font-bold leading-9">Welcome back!</p>
          <span className="mb-12 text-base font-medium">
            Please enter your details
          </span>
          <Input
            label={"Email Address"}
            name={"email"}
            type={"email"}
            placeholder={"Email"}
            width={"70%"}
          />
          <Input
            label={"Password"}
            name={"password"}
            type={"password"}
            placeholder={"Password"}
            width={"70%"}
            mt={"20px"}
          />
          <div className="mt-2 flex w-[70%] justify-between">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="rememberMe" />
              <label htmlFor="rememberMe" className="mt-[-2px]">
                Remember Me
              </label>
            </div>

            <div
              onClick={() => navigate("/forgot-password")}
              className="cursor-pointer text-xs text-grey hover:text-black">
              Forgot password?
            </div>
          </div>
          <button
            onClick={() => {
              toast.success("Login Successfull")
              navigate("/dashboard")
            }}
            className="mb-4 mt-10 h-12 w-[70%] rounded-3xl bg-primary font-medium text-white">
            Login
          </button>
          <button className="flex h-12 w-[70%] items-center justify-center gap-2 rounded-3xl bg-secondary font-medium text-black">
            <img src={google} alt="" />
            <span>Continue with Google</span>
          </button>
          <span className="flex flex-1 items-center pb-2">
            <span className="text-grey">Don’t have an account? &nbsp;</span>{" "}
            <span
              className="cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}>
              Sign Up
            </span>
          </span>
        </div>
      </div>

      {/* right-section */}
      <div className="z-10 h-full w-[60%]">
        <img
          src={background}
          loading="lazy"
          className="h-[100%] w-[100%]"
          alt=""
        />
      </div>
    </div>
  )
}

export default Login
