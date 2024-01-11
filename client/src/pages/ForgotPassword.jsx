import React from "react"
import hero from "./../assets/forgotPassword/hero.svg"
import back from "./../assets/forgotPassword/back.svg"
import logo from "./../assets/logo.svg"
import Input from "../components/generic/Input"
import { useNavigate } from "react-router-dom"

const ForgotPassword = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-primaryBg flex h-[100vh] ">
      {/* left-section */}
      <div className="flex h-full w-[40%] items-center justify-center p-6">
        {/* card */}
        <div className="shadow-login z-20 flex h-full max-h-[802px] w-[90%] min-w-[401px] flex-col items-center rounded-2xl bg-white">
          <img src={logo} className="mb-8 mt-[7%]" alt="" />
          <p className="rubik mb-4 text-4xl font-bold leading-9">
            Forgot password?
          </p>
          <span className="mb-12 text-base font-medium">
            No worries, we’ll send you reset instructions.
          </span>
          <Input
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Enter your email"}
            width={"70%"}
          />

          <button
            onClick={() => navigate("/reset-password/3278237")}
            className="bg-primary mt-10 h-12 w-[70%] rounded-3xl font-medium text-white">
            Send
          </button>
          <span
            className="mt-5 flex cursor-pointer gap-2"
            onClick={() => navigate("/")}>
            <img src={back} className="w-4" alt="" />
            <p className="font-medium">Back to login</p>
          </span>
          <span className="flex w-[50%] flex-1 items-center justify-center gap-3 pb-2">
            <div className="bg-primary h-2 w-1/3 rounded-full">&nbsp;</div>
            <div className="bg-grey h-2 w-1/3 rounded-full">&nbsp;</div>
          </span>
        </div>
      </div>

      {/* right-section */}
      <div className="z-10 flex h-full w-[60%] items-center justify-center">
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default ForgotPassword
