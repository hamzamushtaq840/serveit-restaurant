import React from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import Input from "../components/generic/Input"
import background from "./../assets/login/background.png"
import logo from "./../assets/logo.svg"

const Signup = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-[100vh] bg-primaryBg ">
      {/* left-section */}
      <div className="flex h-full w-[40%] items-center justify-center p-6">
        {/* card */}
        <div className="z-20 flex h-full max-h-[802px] w-[90%] min-w-[401px] flex-col items-center rounded-2xl bg-white shadow-login">
          <img src={logo} className="mb-8 mt-[7%]" alt="" />
          <p className=" mb-4 text-4xl font-bold leading-9">Register</p>
          <span className="mb-4 text-base font-medium">
            Please enter your details
          </span>
          <Input
            label={"Company Name"}
            name={"email"}
            type={"email"}
            placeholder={"Email"}
            width={"70%"}
          />
          <Input
            label={"Email Address"}
            name={"email"}
            type={"email"}
            placeholder={"Email"}
            width={"70%"}
            mt={"10px"}
          />
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
              toast.success("Check your email to verify")
              navigate("/")
            }}
            className="mb-4 mt-10 h-12 w-[70%] rounded-3xl bg-primary font-medium text-white">
            Signup
          </button>
          <span className="flex flex-1 items-center pb-2">
            <span className="text-grey">Already have an account? &nbsp;</span>{" "}
            <span
              className="cursor-pointer hover:underline"
              onClick={() => {
                navigate("/")
              }}>
              Login
            </span>
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

export default Signup
