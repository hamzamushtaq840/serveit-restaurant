import React from "react"
import TopBar from "../components/generic/TopBar"
import upload from "./../assets/profile/upload.png"
import Input from "../components/generic/Input"
import toast from "react-hot-toast"

const Profile = () => {
  return (
    <div className="flex flex-col ">
      <TopBar content={"Profile"} />
      <div className="relative mt-20 h-32 w-32 self-center rounded-full border border-primary bg-primaryBg">
        <img src={upload} className="absolute bottom-0 right-0 h-8 w-8" />
      </div>
      <div className="mt-4 flex w-[60%] flex-col xsm:w-full xsm:px-5">
        <Input
          label={"Full Name"}
          name={"name"}
          type={"name"}
          placeholder={"Name"}
        />
        <Input
          label={"Email Address"}
          name={"email"}
          type={"email"}
          disabled
          placeholder={"dummy@gmail.com"}
          mt={20}
        />
        <Input
          label={"Mobile"}
          name={"phone"}
          type={"number"}
          placeholder={"Mobile Number"}
          mt={20}
        />
        <button
          onClick={() => {
            toast.success("Profile updated successfully")
          }}
          className="mb-4 mt-8 h-12 rounded-lg bg-primary text-lg font-bold text-white">
          Update
        </button>
      </div>
    </div>
  )
}

export default Profile
