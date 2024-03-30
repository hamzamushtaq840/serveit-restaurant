import { MaterialReactTable, useMaterialReactTable } from "material-react-table"
import React, { useMemo, useRef, useState } from "react"
import { CiSettings } from "react-icons/ci"
import { RiDeleteBin3Line } from "react-icons/ri"
import { TbEdit } from "react-icons/tb"
import { tableBody, tableHeader } from "../utils/consts"
import DeleteModal from "../components/generic/DeleteModal"
import CreatePackage from "../components/rewards/CreatePackage"
import Setting from "../components/rewards/Setting"
import QRCode from "qrcode.react"
import QRious from "qrious"
import { LiaDownloadSolid } from "react-icons/lia"
import toast from "react-hot-toast"

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example
const data = [
  {
    id: 1,
    section: "Top Floor",
    server: "Jonatthan",
  },
  {
    id: 2,
    section: "Mid Floor",
    server: "Marks",
  },
  {
    id: 3,
    section: "Ground Floor",
    server: "Ruby",
  },
]

export default function Tables() {
  const [deleteModal, setDeleteModal] = useState(false)
  const [createModal, setCreateModal] = useState(false)

  const downloadQRCode = () => {
    const canvas = document.createElement("canvas")
    const scale = 4 // Scale factor for better resolution
    const qr = new QRious({
      value: "hello",
      size: 132 * scale, // Set the size directly here
      level: "H", // High error correction level for better quality
    })

    // Set canvas size
    canvas.width = qr.size
    canvas.height = qr.size
    const ctx = canvas.getContext("2d")

    // Draw the QR code onto the canvas
    ctx.drawImage(qr.canvas, 0, 0, canvas.width, canvas.height)

    // Convert canvas to data URL and initiate download
    const qrCodeURL = canvas.toDataURL("image/png")
    const aEl = document.createElement("a")
    aEl.href = qrCodeURL
    aEl.download = "QR_Code.png"
    document.body.appendChild(aEl)
    aEl.click()
    document.body.removeChild(aEl)
    toast.success("QrCode downloaded successfully")
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //simple recommended way to define a column
        header: "#",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorKey: "section", //simple recommended way to define a column
        header: "Section",
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorKey: "server", //simple recommended way to define a column
        header: "Assigned Server",
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorKey: "menuItem", //simple recommended way to define a column
        header: "QR Code",
        Cell: ({ renderedCellValue }) => (
          <div
            style={{
              height: "auto",
              margin: "0 auto",
              maxWidth: 32,
              width: "100%",
            }}>
            <QRCode id="qrCodeEl" size={32} value={"hello"} />
          </div>
        ),
        muiTableHeadCellProps: tableHeader,
        muiTableBodyCellProps: tableBody,
      },
      {
        accessorFn: (row, index) => (
          <div className="flex items-center justify-center ">
            <LiaDownloadSolid
              onClick={() => {
                // setCreateModal(true)
                // setFrom(true)
                downloadQRCode()
              }}
              className="h-[32px] w-[32px] cursor-pointer rounded-full p-1 text-orange-500 hover:bg-orange-200"
            />
            <TbEdit
              onClick={() => {
                // setCreateModal(true)
                // setFrom(true)
                // downloadQRCode()
              }}
              className="h-[28px] w-[28px] cursor-pointer rounded-full p-1 text-blue-500 hover:bg-blue-200"
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
      <MaterialReactTable table={table} />
    </div>
  )
}
