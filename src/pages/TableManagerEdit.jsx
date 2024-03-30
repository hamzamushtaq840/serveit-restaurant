import React, { useState, useRef, useEffect } from "react"
import { Rnd } from "react-rnd"
import Select from "../components/generic/Select"
import { TbEdit } from "react-icons/tb"
import { RiDeleteBin3Line } from "react-icons/ri"
import { IoIosAddCircleOutline } from "react-icons/io"
import DeleteModal from "../components/generic/DeleteModal"
import { MdTableRestaurant } from "react-icons/md"
import AddSection from "../components/tableManager/AddSection"
import AssignWaiter from "../components/tableManager/AssignWaiter"

const TableManagerEdit = () => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [addSectionModal, setAddSectionModal] = useState(false)
  const [assignWaiterModal, setAssignWaiterModal] = useState(false)
  const parentRef = useRef(null)
  const [items, setItems] = useState([
    {
      id: 1,
      width: 215,
      height: 150,
      x: 25,
      y: 51,
      tableNo: 1,
      call: false,
      server: { id: 1, name: "Wendy", color: "#626AB1" },
      orderStatus: "Preparing",
      orderTime: "green",
      time: "6m : 10s",
    },
    {
      tableNo: 2,
      id: 2,
      width: 215,
      height: 150,
      x: 270,
      y: 51,
      call: false,
      server: { id: 1, name: "Bill", color: "#62A3B1" },
      orderStatus: "Ready",
      orderTime: "red",
      time: "1h : 02m : 6s",
    },
    {
      tableNo: 3,
      id: 2,
      width: 215,
      height: 150,
      x: 510,
      y: 390,
      call: false,
      server: { id: 1, name: "Bill", color: "#62A3B1" },
      orderStatus: "Ready",
      orderTime: "green",
      time: "6m : 10s",
    },
    {
      tableNo: 4,
      id: 2,
      width: 215,
      height: 150,
      x: 25,
      y: 390,
      call: false,
      server: { id: 1, name: "Bill", color: "#62A3B1" },
      orderStatus: "Ready",
      orderTime: "green",
      time: "6m : 10s",
    },
    {
      tableNo: 7,
      id: 2,
      width: 215,
      height: 150,
      x: 270,
      y: 390,
      call: false,
      server: { id: 1, name: "Wendy", color: "#626AB1" },
      orderStatus: "Ready",
      orderTime: "red",
      time: "1h : 02m : 6s",
    },
    {
      id: 5,
      width: 215,
      height: 150,
      tableNo: 5,
      id: 3,
      x: 515,
      y: 51,
      call: true,
      server: { id: 1, name: "Wendy", color: "#626AB1" },
      orderStatus: "Delivered",
      orderTime: "orange",
      time: "30m : 33s",
    },
    {
      id: 4,
      width: 215,
      height: 150,
      x: 270,
      y: 220,
      tableNo: 6,
      call: false,
      server: { id: 1, name: "Bill", color: "#62A3B1" },
      orderStatus: "Preparing",
      orderTime: "green",
      time: "6m : 10s",
    },
  ])
  const [nextId, setNextId] = useState(6)
  const [parentDimensions, setParentDimensions] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (parentRef.current) {
      const { width, height } = parentRef.current.getBoundingClientRect()
      setParentDimensions({ width, height })
    }
  }, [])

  const handleAddNew = () => {
    const newItemWidth = 215 // Width of the new Rnd component
    const newItemHeight = 150 // Height of the new Rnd component

    const newItemX = (parentDimensions.width - newItemWidth) / 2 - nextId
    const newItemY = (parentDimensions.height - newItemHeight) / 2 - nextId

    setItems([
      ...items,
      {
        id: nextId,
        width: newItemWidth,
        height: newItemHeight,
        x: newItemX,
        y: newItemY,
        tableNo: nextId + 1,
        call: false,
        server: { id: 1, name: "Bill", color: "#62A3B1" },
      },
    ])
    setNextId(nextId + 1)
  }

  const handleDragStop = (e, d, index) => {
    const updatedItems = [...items]
    updatedItems[index] = { ...updatedItems[index], x: d.x, y: d.y }
    setItems(updatedItems)
  }

  const handleResize = (e, direction, ref, delta, position, index) => {
    const updatedItems = [...items]
    updatedItems[index] = {
      ...updatedItems[index],
      width: ref.style.width,
      height: ref.style.height,
      ...position,
    }
    setItems(updatedItems)
  }

  return (
    <div className="mx-5 mb-4 mt-3 flex h-full flex-col ">
      <div className="mb-5 flex items-center justify-between pt-2">
        <div className="flex w-[25.2%]">
          <Select
            width="100%"
            name={"server"}
            options={["Section 1", "Section 2"]}
            placeholder={""}
          />
          <div className="flex items-center pl-2">
            <IoIosAddCircleOutline
              onClick={() => {
                setAddSectionModal(true)
              }}
              className="h-7 w-7 cursor-pointer rounded-full p-1 text-blue-500 hover:bg-blue-200"
            />
            <RiDeleteBin3Line
              onClick={() => {
                setDeleteModal(true)
              }}
              className="h-7 w-7 cursor-pointer rounded-full p-1 text-red-500 hover:bg-red-200"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="flex h-[35px] items-center gap-1 rounded-md bg-primary px-6 text-white"
            onClick={handleAddNew}>
            Add Table
          </button>
          <button
            className="flex h-[35px] items-center gap-1 rounded-md bg-primary px-6 text-white"
            onClick={() => {
              setAssignWaiterModal(true)
            }}>
            Assign Server
          </button>
          <button className="flex h-[35px] items-center gap-1 rounded-md bg-primary px-6 text-white">
            Save
          </button>
        </div>
      </div>

      <div className="flex-1 rounded bg-[#94a3b888]" ref={parentRef}>
        {items.map((item, index) => (
          <Rnd
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "solid 1px #ddd",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              borderRadius: "10px",
              background: "white",
              zIndex: 10,
            }}
            bounds="parent"
            // className=" hover:outline hover:outline-1"
            minHeight={150}
            minWidth={150}
            size={{ width: item.width, height: item.height }}
            position={{ x: item.x, y: item.y }}
            onDragStop={(e, d) => handleDragStop(e, d, index)}
            onResize={(e, direction, ref, delta, position) =>
              handleResize(e, direction, ref, delta, position, index)
            }
            className="relative flex h-[155px] justify-between rounded-lg border p-2 py-1 hover:cursor-pointer">
            <div className="flex flex-1 flex-col items-center justify-center gap-1">
              <div
                style={{ backgroundColor: item.server.color }}
                className="flex h-[68px] w-[68px] flex-col items-center justify-center gap-[2px] rounded-full text-white">
                <div className="flex items-center gap-1">
                  <MdTableRestaurant className="h-5 w-5" />
                  <span className="rubik text-lg font-bold">
                    {item.tableNo}
                  </span>
                </div>
                <span className="text-sm">{item.server.name}</span>
              </div>
            </div>
            <div
              onClick={() => {
                setDeleteModal(true)
              }}
              className="absolute right-[-1px] top-[-1px] cursor-pointer rounded bg-red-300 p-2 text-white hover:cursor-pointer">
              <RiDeleteBin3Line className="text-red-500 " />
            </div>
          </Rnd>
        ))}
      </div>
      {deleteModal && (
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
      )}
      {addSectionModal && <AddSection setOpen={setAddSectionModal} />}
      {assignWaiterModal && <AssignWaiter setOpen={setAssignWaiterModal} />}
    </div>
  )
}

export default TableManagerEdit
