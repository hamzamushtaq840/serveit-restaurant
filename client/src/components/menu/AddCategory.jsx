import React from "react"
import { IoMdClose } from "react-icons/io"
import Input from "../generic/Input"
import { CiCirclePlus } from "react-icons/ci"

const AddCategory = ({ setOpen }) => {
  return (
    <div className="fixed left-1/2 top-1/2 z-[50] h-[100vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm">
      <div className="modalContainer flex w-[43.70364583333333vw] min-w-[550px] flex-col rounded-lg bg-white">
        <header className="border-b p-5">
          <h1 className="text-xl font-bold">Add Category</h1>
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 hover:bg-secondary">
            {/* <img src="/close.svg" alt="close" /> */}
            <IoMdClose className="h-[20px] w-[20px]" />
          </button>
        </header>
        <div className="relative m-5 flex h-[150px] items-center justify-center rounded-lg border border-dashed border-black">
          <h1>Drop your image here!</h1>
          <button
            onClick={() => {}}
            className="absolute bottom-[-60px] mx-auto mb-8 mt-10 flex h-[40px] items-center gap-2 rounded-md bg-primary px-12 font-medium text-white">
            <CiCirclePlus />
            Add image
          </button>
        </div>
        <body className="flex flex-col gap-4 p-6">
          <Input
            label={"Category Name"}
            name={"email"}
            type={"email"}
            placeholder={"Name"}
            width={"100%"}
          />
          <Input
            label={"Select Items"}
            name={"email"}
            type={"email"}
            placeholder={"Items"}
            width={"100%"}
          />
        </body>
        <button
          onClick={() => {}}
          className="mx-auto mb-8 mt-10 h-[40px] rounded-md bg-primary px-12 font-medium text-white">
          Save
        </button>
      </div>
    </div>
  )
}

export default AddCategory
