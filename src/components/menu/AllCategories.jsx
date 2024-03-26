import React, { useState } from "react"
import { IoIosArrowRoundBack } from "react-icons/io"
import { RiDeleteBin3Line } from "react-icons/ri"
import { TbEdit } from "react-icons/tb"
import DeleteModal from "../generic/DeleteModal"
import AddCategory from "./AddCategory"
import { useNavigate } from "react-router-dom"

const AllCategories = () => {
  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="m-5 flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <span
          onClick={() => navigate(-1)}
          className="flex cursor-pointer items-center gap-1 text-base font-medium">
          <IoIosArrowRoundBack className="h-8 w-8" />
          Back to dashboard
        </span>
        <button
          onClick={() => setAddModal(true)}
          className="rounded-lg bg-primary px-8 py-1 font-medium text-white hover:bg-primary/80">
          Add
        </button>
      </div>
      <div className="flex h-[55px] items-center rounded-t-lg bg-primarySub px-5 font-semibold   text-white">
        Category Name
      </div>
      {[1, 2, 3].map((v, i) => {
        return (
          <div className="flex justify-between border-b bg-white px-5 py-3">
            <div className="">
              <span>Breakfast</span>
            </div>
            <div className="flex ">
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
      {addModal && <AddCategory setOpen={setAddModal} />}
      {editModal && <AddCategory setOpen={setEditModal} />}
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

export default AllCategories
