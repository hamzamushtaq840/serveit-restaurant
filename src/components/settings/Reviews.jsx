import React, { useState } from "react"
import { IoIosAddCircleOutline } from "react-icons/io"
import { RiDeleteBin3Line } from "react-icons/ri"
import { TbEdit } from "react-icons/tb"
import Switch from "react-switch"
import DeleteModal from "../generic/DeleteModal"
import AddQuestion from "./reviews/AddQuestion"

const Reviews = () => {
  const [messages, setMessages] = useState(["", "", ""])
  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  return (
    <div className="relative flex h-full flex-col gap-6 p-4">
      <div className="flex items-center gap-2">
        <label for="email" className="w-[17%] font-medium">
          Reviews
        </label>
        <span className="w-[5%]">:</span>
        <div className="w-full">
          <Switch
            onColor="#EA6A11"
            onHandleColor="#FDF6E4"
            handleDiameter={20}
            uncheckedIcon={false}
            width={30}
            height={10}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            className="react-switch "
            id="material-switch"
          />
        </div>
      </div>
      <div className="flex items-start gap-2">
        <label for="email" className="w-[17%] font-medium">
          Custom Questions
        </label>
        <span className="w-[5%]">:</span>
        <div className="flex w-full flex-col gap-4">
          <button
            onClick={() => {
              setAddModal(true)
            }}
            className="my-1 ml-1 flex items-center gap-2 self-end rounded-md bg-primarySub px-3 py-1 text-white hover:bg-primarySub/90">
            Message
            <IoIosAddCircleOutline />
          </button>
          {messages.map((v, i) => {
            return (
              <div
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.05) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                }}
                className="flex items-center justify-between gap-2 rounded-md p-3">
                <div className="flex flex-col gap-1">
                  <span>Lorem ipsum dolor sit amet {i + 1}</span>
                </div>
                <div className="flex">
                  <TbEdit
                    onClick={() => {
                      setEditModal(true)
                    }}
                    className="h-[28px] w-[28px] cursor-pointer rounded-full p-1 text-blue-500 hover:bg-blue-200"
                  />
                  <RiDeleteBin3Line
                    onClick={() => {
                      setDeleteModal(true)
                    }}
                    className="h-[27px] w-[27px] cursor-pointer rounded-full p-1 text-red-500 hover:bg-red-200"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 right-4">
        <button
          onClick={() => {}}
          className="rounded-md bg-primary px-8 py-1 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          Save
        </button>
      </div>
      {addModal && <AddQuestion close={() => setAddModal(false)} />}
      {editModal && <AddQuestion close={() => setEditModal(false)} />}
      <DeleteModal
        isOpen={deleteModal}
        onClose={() => {
          setDeleteModal(false)
        }}
        onDelete={() => {
          setDeleteModal(false)
          toast.success("Inventory Item deleted successfully")
        }}
      />
    </div>
  )
}

export default Reviews
