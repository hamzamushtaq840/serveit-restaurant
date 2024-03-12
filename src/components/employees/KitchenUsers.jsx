import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import React, { useMemo, useState } from "react"
import toast from "react-hot-toast"
import { IoIosAddCircleOutline } from "react-icons/io"
import { RiDeleteBin3Line } from "react-icons/ri"
import { TbEdit } from "react-icons/tb"
import DeleteModal from "../generic/DeleteModal"
import { tableBody, tableHeader } from "./../../utils/consts"
import AddKitchenUserModal from "./AddKitchenUserModal"

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example
const data = [
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    status: "Active",
    shiftTime: "09:30 - 18:30",
    workingDays: ["M", "T", "W", "T", "F", "S", "S"],
    amountSpent: 323,
  },
  {
    name: "Sara Lorene",
    email: "sara@gmail.com",
    status: "Blocked",
    shiftTime: "09:30 - 18:30",
    workingDays: ["M", "T", "W", "T", "F", "S", "S"],
    amountSpent: 323,
  },
]

export default function KitchenUsers() {
  const [deleteModal, setDeleteModal] = useState(false)
  const [kitchenUserModal, setKitchenUserModal] = useState(false)

  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Name",
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorKey: "email", //simple recommended way to define a column
        header: "Email",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorKey: "shiftTime", //simple recommended way to define a column
        header: "Shift Time",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorFn: (row, index) => (
          <div className="flex items-center justify-center gap-2">
            {row.workingDays.map((day, index) => (
              <div
                className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border text-sm ${
                  index !== 6
                    ? "bg-primary text-white"
                    : "bg-[#E9E9E9] text-sm text-[#575757] "
                }`}>
                {day}
              </div>
            ))}
          </div>
        ),
        header: "Working Days",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorFn: (row, index) => (
          <div className="flex items-center justify-center ">
            <TbEdit className="h-[28px] w-[28px] cursor-pointer rounded-full p-1 text-blue-500 hover:bg-blue-200" />
            <RiDeleteBin3Line
              onClick={() => {
                setDeleteModal(true)
              }}
              className="h-[27px] w-[27px] cursor-pointer rounded-full p-1 text-red-500 hover:bg-red-200"
            />
          </div>
        ),
        header: "Actions",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
    ],
    []
  )

  const table = useMaterialReactTable({
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableColumnActions: false,
    data,
    columns,
    renderTopToolbarCustomActions: () => {
      return (
        <div className="mb-2 flex w-full justify-end">
          <button
            onClick={() => {
              setKitchenUserModal(true)
            }}
            className="my-1 ml-1 flex items-center gap-2 rounded-md bg-primarySub px-3 py-1 text-white hover:bg-primarySub/90">
            Add New
            <IoIosAddCircleOutline />
          </button>
        </div>
      )
    },
    defaultColumn: {
      minSize: 100, //allow columns to get smaller than default
      maxSize: 9001, //allow columns to get larger than default
      size: 100, //make columns wider by default
    },
  })

  return (
    <>
      <MaterialReactTable table={table} />
      <DeleteModal
        isOpen={deleteModal}
        onClose={() => {
          setDeleteModal(false)
        }}
        onDelete={() => {
          setDeleteModal(false)
          toast.success("Order deleted successfully")
        }}
      />
      {kitchenUserModal && (
        <AddKitchenUserModal setOpen={setKitchenUserModal} />
      )}
    </>
  )
}
