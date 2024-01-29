import React, { useMemo, useState } from "react"
import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import { tableBody, tableHeader } from "../utils/consts"

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example
const data = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Sara",
    age: 25,
  },
]

export default function TipsManager() {
  const [rowSelection, setRowSelection] = useState({})

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
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorFn: row => row.age,
        accessorKey: "age",
        header: "Actions",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
    ],
    []
  )

  const table = useMaterialReactTable({
    enableDensityToggle: false,
    // enableRowSelection: true,
    enableFullScreenToggle: false,
    enableColumnActions: false,
    // muiSearchTextFieldProps: {
    //   color: "red",
    // },
    // muiPaginationProps: {
    //   color: "secondary",
    //   rowsPerPageOptions: [10, 20, 30],
    //   shape: "rounded",
    //   variant: "outlined",
    // },
    // onRowSelectionChange: e => console.log(e),
    data,
    columns,
  })

  return (
    <div className="p-8">
      <MaterialReactTable table={table} />
    </div>
  )
}
