import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import React, { useMemo, useState } from "react"
import { CiViewList } from "react-icons/ci"
import { FaDollarSign } from "react-icons/fa"
import TipsHistoryModal from "../components/tipsManager/TipsHistoryModal"
import { tableBody, tableHeader } from "../utils/consts"

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example
const data = [
  {
    name: "John",
    age: 30,
    widthdrawRequested: false,
  },
  {
    name: "Sara",
    age: 25,
    widthdrawRequested: true,
  },
]

export default function TipsManager() {
  const [historyModal, setHistoryModal] = useState(false)

  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Server",
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorFn: row => row.age,
        accessorKey: "age",
        header: "Balance",
        Cell: ({ renderedCellValue }) => <>$ {renderedCellValue}</>,
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorKey: "widthdrawRequested",
        Cell: ({ renderedCellValue }) => (
          <div>{renderedCellValue === true ? "Yes" : "No"}</div>
        ),
        header: "Withdraw Request",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorFn: row => (
          <div className="gap- flex items-center justify-center gap-2">
            {row.widthdrawRequested && (
              <button className="flex items-center justify-center rounded-md bg-[#FFF0C7] px-2 py-[2px] text-primary">
                <FaDollarSign />
                Marked as Paid
              </button>
            )}
            <button
              onClick={() => setHistoryModal(true)}
              className="flex items-center justify-center gap-1 rounded-md bg-[#E9E9E9] px-2 py-[2px] ">
              History
              <CiViewList className="text-[18px]" />
            </button>
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
      {historyModal && <TipsHistoryModal setModal={setHistoryModal} />}
    </div>
  )
}
