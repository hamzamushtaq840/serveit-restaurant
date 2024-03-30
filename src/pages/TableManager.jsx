import React, { useEffect, useRef, useState } from "react"
import { BsFire } from "react-icons/bs"
import { FaBell, FaRegCheckCircle, FaUtensils } from "react-icons/fa"
import { MdTableRestaurant } from "react-icons/md"
import { Rnd } from "react-rnd"
import Select from "../components/generic/Select"
import { TbEdit } from "react-icons/tb"
import { useNavigate } from "react-router-dom"

const TableManager = () => {
  const tables = [
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
      orderTime: "red",
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
  ]
  const parentRef = useRef(null)
  const [parentDimensions, setParentDimensions] = useState({
    width: 0,
    height: 0,
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (parentRef.current) {
      const { width, height } = parentRef.current.getBoundingClientRect()
      setParentDimensions({ width, height })
    }
  }, [])

  return (
    <div className="mx-5 mb-4 mt-3 flex h-full flex-col ">
      <div className="mb-5 flex items-center justify-between pt-2">
        <Select
          width="20%"
          name={"server"}
          options={["Section 1", "Section 2"]}
          placeholder={""}
        />
        <button
          onClick={() => {
            navigate("edit")
          }}
          className="flex h-[35px] items-center gap-1 rounded-md bg-primary px-6 text-white">
          Edit
          <TbEdit className="h-4 w-4" />
        </button>
      </div>
      <div
        className="h-full rounded-lg border bg-[#94a3b846] p-5"
        ref={parentRef}>
        {tables.map((v, index) => (
          <Rnd
            key={v.id}
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
            className="relative flex h-[155px] justify-between rounded-lg border p-2 py-1 hover:cursor-pointer"
            size={{ width: v.width, height: v.height }}
            position={{ x: v.x, y: v.y }}>
            <div className="">
              {v.orderStatus && (
                <div className="absolute left-2 top-1 text-sm font-semibold text-[#ccc]">
                  #23475
                </div>
              )}
              <div className="flex flex-1 flex-col items-center justify-center gap-1">
                <div
                  style={{ backgroundColor: v.server.color }}
                  className="flex h-[68px] w-[68px] flex-col items-center justify-center gap-[2px] rounded-full text-white">
                  <div className="flex items-center gap-1">
                    <MdTableRestaurant className="h-5 w-5" />
                    <span className="rubik text-lg font-bold">{v.tableNo}</span>
                  </div>
                  <span className="text-sm">{v.server.name}</span>
                </div>
                {v.orderStatus && (
                  <div className="flex items-center gap-1 text-xs">
                    <span className="rubik">{v.orderStatus}</span>
                    {v.orderStatus === "Ready" && (
                      <FaRegCheckCircle className="text-green-500" />
                    )}
                    {v.orderStatus === "Preparing" && (
                      <BsFire className="text-primary" />
                    )}
                    {v.orderStatus === "Delivered" && (
                      <FaUtensils className="text-blue-400" />
                    )}
                  </div>
                )}
                {v.time && (
                  <div className="mt-1 flex gap-2">
                    <div
                      style={{
                        backgroundColor:
                          v.orderTime === "green"
                            ? "#F0F0F0"
                            : v.orderTime === "red"
                              ? "#fee2e2"
                              : "#e7b31616",
                        color:
                          v.orderTime === "green"
                            ? "#000000"
                            : v.orderTime === "red"
                              ? "#EB262B"
                              : "#E7B416",
                        border:
                          v.orderTime === "red"
                            ? "2px solid #ff5858"
                            : v.orderTime === "orange"
                              ? "2px solid #E7B416"
                              : "",
                      }}
                      className="flex h-6 items-center justify-center rounded-md px-2 text-sm font-semibold">
                      {v.time}
                    </div>
                  </div>
                )}
              </div>
              {v.call && (
                <div className="bell-icon2 absolute right-[-5px] top-[-10px] rounded-full bg-primary p-2 text-white">
                  <FaBell className="bell-icon" />
                </div>
              )}
            </div>
          </Rnd>
        ))}
      </div>
    </div>
  )
}

export default TableManager
