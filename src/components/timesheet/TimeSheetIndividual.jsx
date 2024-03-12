import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import React, { useMemo } from "react"
import { tableBody, tableHeader } from "../../utils/consts"

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example
const data = [
  {
    name: "John",
    checkIn: "01/19/2024 - 15:14:21",
    checkOut: "01/19/2024 - 15:14:21",
    totalHours: "8h 59m",
  },
]

export default function TimeSheetIndividual() {
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
        accessorKey: "checkIn", //simple recommended way to define a column
        header: "Check In",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorKey: "checkOut",
        header: "Check Out",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorKey: "totalHours",
        header: "Total Hours",
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

  return <MaterialReactTable table={table} />
}
