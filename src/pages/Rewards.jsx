import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import React, { useMemo, useState } from "react"
import { CiSettings } from "react-icons/ci"
import { RiDeleteBin3Line } from "react-icons/ri"
import { TbEdit } from "react-icons/tb"
import { tableBody, tableHeader } from "../utils/consts"
import DeleteModal from "../components/generic/DeleteModal"
import CreatePackage from "../components/rewards/CreatePackage"
import Setting from "../components/rewards/Setting"

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example
const data = [
  {
    id: 1,
    name: "John",
    minimumPoints: 4000,
    amount: 323,
    menuItem: {
      id: 31,
      name: "Burger 'Wanted'"
    }
  },
  {
    id: 2,
    name: "Sara",
    minimumPoints: 4000,
    amount: 323,
    menuItem: {
      id: 31,
      name: "Burger 'Wanted'"
    }
  },
  {
    id: 3,
    name: "Sara",
    minimumPoints: 4000,
    amount: 323,
    menuItem: {
      id: 31,
      name: "Burger 'Wanted'"
    }
  },
]

export default function Rewards() {
  const [deleteModal, setDeleteModal] = useState(false)
  const [createModal, setCreateModal] = useState(false)
  const [from, setFrom] = useState(false)
  const [settingModal, setSettingModal] = useState(false)

  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //simple recommended way to define a column
        header: "#",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Name",
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorKey: "minimumPoints", //simple recommended way to define a column
        header: "Minimun Points",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorKey: "menuItem", //simple recommended way to define a column
        header: "Menu Item",
        Cell: ({ renderedCellValue }) => <div>{renderedCellValue.name}</div>,
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        Cell: ({ renderedCellValue }) => <div>$ {renderedCellValue}</div>,
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorFn: (row, index) => (
          <div className="flex items-center justify-center ">
            <TbEdit onClick={() => { setCreateModal(true); setFrom(true) }} className="h-[28px] w-[28px] cursor-pointer rounded-full p-1 text-blue-500 hover:bg-blue-200" />
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
    defaultColumn: {
      minSize: 100, //allow columns to get smaller than default
      maxSize: 9001, //allow columns to get larger than default
      size: 100, //make columns wider by default
    },
  })

  return (
    <div className="p-6">
      <div className="flex justify-end mb-5">
        <div className="flex gap-2 items-center">
          <button onClick={() => { setCreateModal(true); setFrom(false) }} className="bg-primary rounded-md px-3 py-1 text-white hover:bg-primarySub/90">Create Package</button>
          <div className="rounded-full p-1 hover:text-[#D3A729] hover:bg-[#FFF0C7]">
            <CiSettings onClick={() => setSettingModal(true)} className="w-7 h-7 cursor-pointer" />
          </div>
        </div>
      </div>
      <MaterialReactTable table={table} />
      {deleteModal && <DeleteModal
        isOpen={deleteModal}
        onClose={() => {
          setDeleteModal(false)
        }}
        onDelete={() => {
          setDeleteModal(false)
          toast.success("Order deleted successfully")
        }}
      />}
      {createModal && <CreatePackage setOpen={setCreateModal} fromEdit={from} />}
      {settingModal && <Setting setOpen={setSettingModal} />}
    </div>
  )
}
