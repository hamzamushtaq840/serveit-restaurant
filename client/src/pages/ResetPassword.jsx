import React from "react"
import { useNavigate } from "react-router-dom"
import Input from "../components/generic/Input"
import background from "./../assets/forgotPassword/hero2.svg"
import logo from "./../assets/logo.svg"
import toast from "react-hot-toast"

const ResetPassword = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-[100vh] bg-primaryBg ">
      {/* left-section */}
      <div className="flex h-full w-[40%] items-center justify-center p-6">
        {/* card */}
        <div className="z-20 flex h-full max-h-[802px] w-[90%] min-w-[401px] flex-col items-center rounded-2xl bg-white shadow-login">
          <img src={logo} className="mb-8 mt-[7%]" alt="" />
          <p className=" mb-4 text-4xl font-bold leading-9">Password Reset</p>
          <span className="mb-4 text-base font-medium">
            <span className="text-grey">We sent a code to</span> example@xyz.com
          </span>
          <Input
            label={"Password"}
            name={"password"}
            type={"password"}
            placeholder={"Password"}
            width={"70%"}
            mt={"10px"}
          />
          <Input
            label={"Confirm Password"}
            name={"confirmPassword"}
            type={"password"}
            placeholder={"Confirm Password"}
            width={"70%"}
            mt={"10px"}
          />
          <button
            onClick={() => {
              navigate("/")
              toast.success("Password Reset Successfull")
            }}
            className="mb-4 mt-10 h-12 w-[70%] rounded-3xl bg-primary font-medium text-white">
            Password reset
          </button>
          <span className="flex w-[50%] flex-1 items-center justify-center gap-3 pb-2">
            <div className="h-2 w-1/3 rounded-full bg-grey">&nbsp;</div>
            <div className="h-2 w-1/3 rounded-full bg-primary">&nbsp;</div>
          </span>
        </div>
      </div>

      {/* right-section */}
      <div className="z-10 h-full w-[60%]">
        <img src={background} className="h-[100%] w-[100%]" alt="" />
      </div>
    </div>
  )
}

export default ResetPassword
