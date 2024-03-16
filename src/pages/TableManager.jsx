import React, { useState, useRef, useEffect } from "react"
import { Rnd } from "react-rnd"

const App = () => {
  const parentRef = useRef(null)
  const [items, setItems] = useState([
    { id: 1, width: 94, height: 84, x: 85, y: 91 },
    { id: 2, width: 94, height: 84, x: 209, y: 91 },
    { id: 3, width: 94, height: 84, x: 85, y: 197.30001831054688 },
    { id: 4, width: 94, height: 84, x: 209, y: 197.30001831054688 },
    { id: 5, width: "154px", height: "191px", x: 403, y: 91.69999694824219 },
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
    const newItemWidth = 94 // Width of the new Rnd component
    const newItemHeight = 84 // Height of the new Rnd component

    const newItemX = (parentDimensions.width - newItemWidth) / 2
    const newItemY = (parentDimensions.height - newItemHeight) / 2

    setItems([
      ...items,
      {
        id: nextId,
        width: newItemWidth,
        height: newItemHeight,
        x: newItemX,
        y: newItemY,
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
    <div className="flex h-full flex-col">
      <button
        className="ml-auto mr-5 mt-3 rounded-md bg-primary px-8 py-1 text-white"
        onClick={handleAddNew}>
        Add New
      </button>
      <div
        className="mx-5 mb-4 mt-3 flex-1 rounded bg-[#a8a8a86d]"
        ref={parentRef}>
        {items.map((item, index) => (
          <Rnd
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "solid 1px #ddd",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              borderRadius: "4px",
              background: "white",
              zIndex: 10,
            }}
            className=" hover:outline hover:outline-1"
            size={{ width: item.width, height: item.height }}
            position={{ x: item.x, y: item.y }}
            onDragStop={(e, d) => handleDragStop(e, d, index)}
            onResize={(e, direction, ref, delta, position) =>
              handleResize(e, direction, ref, delta, position, index)
            }
            bounds="parent">
            {item.id}
          </Rnd>
        ))}
      </div>
    </div>
  )
}

export default App
