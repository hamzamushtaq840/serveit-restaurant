import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import React, { useMemo, useState } from "react"
import toast from "react-hot-toast"
import { LiaClipboardListSolid } from "react-icons/lia"
import { RiDeleteBin3Line } from "react-icons/ri"
import { TbEdit } from "react-icons/tb"
import DeleteModal from "../components/generic/DeleteModal"
import { tableBody, tableHeader } from "../utils/consts"

const data = [
  {
    orderId: 1,
    customerName: "John",
    location: "T25",
    status: "Open",
    amount: 1000,
    paymentType: "Cash",
    paymentStatus: "Pending",
    time: "2 hours ago",
  },
  {
    orderId: 2,
    customerName: "Sara",
    location: "T25",
    status: "Accepted",
    amount: 2000,
    paymentType: "Cash",
    paymentStatus: "Pending",
    time: "2 hours ago",
  },
  {
    orderId: 3,
    customerName: "Maryam",
    location: "T25",
    status: "Ready",
    amount: 3000,
    paymentType: "Cash",
    paymentStatus: "Paid",
    time: "2 hours ago",
  },
  {
    orderId: 4,
    customerName: "Hamza",
    location: "T25",
    status: "Preparing",
    amount: 4000,
    paymentType: "Cash",
    paymentStatus: "Pending",
    time: "2 hours ago",
  },
  {
    orderId: 5,
    customerName: "Brandon",
    location: "T25",
    status: "Canceled",
    amount: 5000,
    paymentType: "Cash",
    paymentStatus: "Pending",
    time: "2 hours ago",
  },
  {
    orderId: 6,
    customerName: "Gigi",
    location: "T25",
    status: "Completed",
    amount: 6000,
    paymentType: "Cash",
    paymentStatus: "Paid",
    time: "2 hours ago",
  },
]

export default function Orders() {
  const [deleteModal, setDeleteModal] = useState(false)

  const columns = useMemo(() => [
    {
      accessorKey: "orderId", //simple recommended way to define a column
      header: "#",
      muiTableHeadCellProps: tableHeader,
      muiTableBodyCellProps: tableBody,
    },
    {
      accessorKey: "customerName", //simple recommended way to define a column
      header: "Customer",
      Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      muiTableHeadCellProps: tableHeader,
      muiTableBodyCellProps: tableBody,
    },
    {
      accessorKey: "location", //simple recommended way to define a column
      header: "Location",
      muiTableHeadCellProps: tableHeader,
      muiTableBodyCellProps: tableBody,
    },
    {
      accessorKey: "status", //simple recommended way to define a column
      accessorFn: row => (
        <div
          className={`${row.status === "Open" && "rounded-md bg-[#E9E9E9] py-1"}
            ${
              row.status === "Accepted" &&
              "rounded-md bg-[#ECFFBA] py-1 text-[#80AF00]"
            }
            ${
              row.status === "Ready" &&
              "rounded-md bg-[#E1CDFF] py-1 text-[#934AFF]"
            }
            ${
              row.status === "Preparing" &&
              "rounded-md bg-[#FFF0C7] py-1 text-[#D3A729]"
            }
            ${
              row.status === "Canceled" &&
              "rounded-md bg-[#FFE4DE] py-1 text-[#B71D18]"
            }
            ${
              row.status === "Completed" &&
              "rounded-md bg-[#D6F1E8] py-1 text-[#0B7E6E]"
            }
            `}>
          {row.status}
        </div>
      ),
      header: "Status",
      muiTableHeadCellProps: tableHeader,
      muiTableBodyCellProps: tableBody,
    },
    {
      accessorKey: "amount", //simple recommended way to define a column
      header: "Amount",
      muiTableHeadCellProps: tableHeader,
      muiTableBodyCellProps: tableBody,
    },
    {
      accessorKey: "paymentType",
      header: "Payment Type",
      muiTableHeadCellProps: tableHeader,
      muiTableBodyCellProps: tableBody,
    },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      accessorFn: row => (
        <div
          className={`${row.paymentStatus === "Pending" && "text-[#EABB36]"}
            ${row.paymentStatus === "Paid" && "text-[#0B7E6E]"}
            `}>
          {row.paymentStatus}
        </div>
      ),
      muiTableHeadCellProps: tableHeader,
      muiTableBodyCellProps: tableBody,
    },
    {
      accessorKey: "time",
      header: "Time",
      muiTableHeadCellProps: tableHeader,
      muiTableBodyCellProps: tableBody,
    },
    {
      accessorFn: (row, index) => (
        <div className="flex items-center justify-center ">
          <LiaClipboardListSolid className="h-[28px] w-[28px] cursor-pointer rounded-full p-1 text-[#D3A729] hover:bg-[#FFF0C7]" />
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
  ])

  const table = useMaterialReactTable({
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableColumnActions: false,
    enableHiding: true,
    data,
    columns,
    defaultColumn: {
      minSize: 100, //allow columns to get smaller than default
      maxSize: 9001, //allow columns to get larger than default
      size: 100, //make columns wider by default
    },
  })

  return (
    <div className="p-6">
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
    </div>
  )
}
