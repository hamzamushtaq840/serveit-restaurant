import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import React, { useMemo, useState } from "react"
import { IoIosAddCircleOutline } from "react-icons/io"
import { RiDeleteBin3Line } from "react-icons/ri"
import { TbEdit } from "react-icons/tb"
import { tableBody, tableHeader } from "../utils/consts"
import AddItem from "../components/inventory/AddItem"
import EditItem from "../components/inventory/EditItem"
import DeleteModal from "../components/generic/DeleteModal"
import toast from "react-hot-toast"

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example
const data = [
  {
    name: "Cheese",
    units: "Kilo Gram (Kg)",
    quantityUsed: 30,
    percentage: "30",
    quantityTotal: 100,
    status: "Out of Stock",
  },
  {
    name: "Mashroom",
    units: "Grams (g)",
    percentage: "50",
    quantityUsed: 50,
    quantityTotal: 100,
    status: "Low Stock",
  },
  {
    name: "Chicken",
    units: "Kilo Gram (Kg)",
    percentage: "90",
    quantityUsed: 90,
    quantityTotal: 100,
    status: "In Stock",
  },
]

export default function Inventory() {
  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  const columns = useMemo(() => [
    {
      accessorKey: "name", //simple recommended way to define a column
      header: "Name",
      Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      muiTableHeadCellProps: tableHeader,
      muiTableBodyCellProps: tableBody,
    },
    {
      accessorKey: "units", //simple recommended way to define a column
      header: "Units",
      muiTableHeadCellProps: tableHeader,
      muiTableBodyCellProps: tableBody,
    },
    {
      header: "Avalibility",
      accessorFn: (row, index) => (
        <div className="flex items-center justify-center gap-2">
          <div className="h-[10px] w-[70%] rounded-full bg-[#cfcfcf7c]">
            <div
              style={{ width: `${row.percentage}%` }}
              className={`h-[10px] rounded-full ${
                row.percentage <= 30
                  ? "bg-[#EB262B]"
                  : row.percentage > 30 && row.percentage <= 50
                    ? "bg-[#FFCA28]"
                    : "bg-[#4CAF50]" // Change "bg-green-500" to your desired shade of green
              }`}></div>
          </div>
          <div className="text-xs">
            {row.quantityUsed} / {row.quantityTotal}
          </div>
        </div>
      ),
      muiTableHeadCellProps: tableHeader,
      muiTableBodyCellProps: tableBody,
    },
    {
      accessorKey: "status",
      header: "Status",
      Cell: ({ renderedCellValue }) => (
        <strong
          className={`${
            renderedCellValue === "Low Stock"
              ? "text-[#FFCA28]"
              : renderedCellValue === "In Stock"
                ? "text-green-500"
                : "text-[#EB262B]"
          }`}>
          {renderedCellValue}
        </strong>
      ),
      muiTableHeadCellProps: tableHeader,
      muiTableBodyCellProps: tableBody,
    },
    {
      accessorFn: (row, index) => (
        <div className="flex items-center justify-center ">
          <TbEdit
            onClick={() => setEditModal(true)}
            className="h-[28px] w-[28px] cursor-pointer rounded-full p-1 text-blue-500 hover:bg-blue-200"
          />
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
  ])

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
              setAddModal(true)
            }}
            className="my-1 ml-1 flex items-center gap-2 rounded-md bg-primarySub px-3 py-1 text-white hover:bg-primarySub/90">
            Add Item
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
    <div className="p-6">
      <MaterialReactTable table={table} />
      {addModal && <AddItem close={() => setAddModal(false)} />}
      {editModal && <EditItem close={() => setEditModal(false)} />}
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
