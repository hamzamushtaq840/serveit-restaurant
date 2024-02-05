import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import React, { useMemo } from "react"
import { RiDeleteBin3Line } from "react-icons/ri"
import { tableBody, tableHeader } from "../utils/consts"
import { MdBlock } from "react-icons/md"
import { CgUnblock } from "react-icons/cg"
import { TbLockOpenOff } from "react-icons/tb"
import { TbLock } from "react-icons/tb"
import { TbLockOpen } from "react-icons/tb"

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example
const data = [
  {
    name: "John",
    email: "johndoe@gmail.com",
    status: "Active",
    orders: 3,
    mobile: 32423323243,
    amountSpent: 323,
  },
  {
    name: "Sara",
    email: "sara@gmail.com",
    status: "Blocked",
    orders: 3,
    mobile: 32423323243,
    amountSpent: 323,
  },
]

export default function Customers() {
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
        accessorKey: "mobile",
        header: "Mobile",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorFn: row => (
          <div
            className={`
            ${
              row.status === "Active" &&
              "mx-auto max-w-[120px] rounded-md bg-[#ECFFBA] py-1 text-[#80AF00]"
            }
            ${
              row.status === "Blocked" &&
              "mx-auto max-w-[120px] rounded-md bg-[#FFE4DE] py-1 text-[#B71D18]"
            }
            `}>
            {row.status}
          </div>
        ),
        accessorKey: "status", //simple recommended way to define a column
        header: "Status",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorKey: "orders",
        header: "Orders",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorKey: "amountSpent",
        header: "Amount Spent",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorFn: row => (
          <div className="flex items-center justify-center gap-2">
            {row.status === "Active" && (
              <TbLock
                className="h-[27px] w-[27px] cursor-pointer rounded-full p-1 text-red-500 hover:bg-red-200"
                onClick={() => {}}
              />
            )}
            {row.status === "Blocked" && (
              <TbLockOpen
                className="h-[27px] w-[27px] cursor-pointer rounded-full p-1 text-blue-500 hover:bg-blue-200"
                onClick={() => {}}
              />
            )}
          </div>
        ),
        accessorKey: "action",
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
    defaultColumn: {
      minSize: 100, //allow columns to get smaller than default
      maxSize: 9001, //allow columns to get larger than default
      size: 100, //make columns wider by default
    },
  })

  return (
    <div className="p-6">
      <MaterialReactTable table={table} />
    </div>
  )
}
