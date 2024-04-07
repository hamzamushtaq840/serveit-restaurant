import React from "react"

const Inventory = () => {
  const data = [
    {
      name: "Cheese",
      units: "Kilo Gram (Kg)",
      quantityUsed: 30,
      percentage: "30",
      quantityTotal: 100,
      status: "Out of Stock",
    },
    {
      name: "Mashroom",
      units: "Grams (g)",
      percentage: "10",
      quantityUsed: 10,
      quantityTotal: 100,
      status: "Out of Stock",
    },
    {
      name: "Chicken",
      units: "Kilo Gram (Kg)",
      percentage: "20",
      quantityUsed: 20,
      quantityTotal: 100,
      status: "Out of Stock",
    },
  ]

  const data2 = [
    {
      name: "Red Chilli",
      units: "Kilo Gram (Kg)",
      quantityUsed: 47,
      percentage: "47",
      quantityTotal: 100,
      status: "Low Stock",
    },
    {
      name: "Salt",
      units: "Grams (g)",
      percentage: "39",
      quantityUsed: 39,
      quantityTotal: 100,
      status: "Low Stock",
    },
    {
      name: "Potato",
      units: "Kilo Gram (Kg)",
      percentage: "31",
      quantityUsed: 31,
      quantityTotal: 100,
      status: "Low Stock",
    },
  ]
  return (
    <div className="w-full bg-white p-5 shadow-lg">
      <span className="rubik text-xl font-semibold">Inventory</span>
      <div className="mt-3 flex gap-6">
        <div className="flex w-1/2 flex-col gap-3">
          <span className="mb-2 text-lg font-semibold text-[#ffaf37]">
            Low Stock
          </span>
          <div className="flex flex-col gap-6">
            {data2.map((row, i) => {
              return (
                <div className="flex items-center gap-2">
                  <span className="w-[20%]">{row.name}</span>
                  <div className="h-[10px] w-[70%] rounded-full bg-[#cfcfcf7c]">
                    <div
                      style={{ width: `${row.percentage}%` }}
                      className={`h-[10px] rounded-full ${
                        row.percentage <= 30
                          ? "bg-[#EB262B]"
                          : row.percentage > 30 && row.percentage <= 50
                            ? "bg-[#FFCA28]"
                            : "bg-[#4CAF50]" // Change "bg-green-500" to your desired shade of green
                      }`}></div>
                  </div>
                  <div className="w-[11%] text-xs">
                    {row.quantityUsed} / {row.quantityTotal}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-6">
          <span className="text-lg font-semibold text-[#EB262B]">
            Out of Stock
          </span>
          <div className="flex flex-col gap-6">
            {data.map((row, i) => {
              return (
                <div className="flex items-center gap-2">
                  <span className="w-[20%]">{row.name}</span>
                  <div className="h-[10px] w-[70%] rounded-full bg-[#cfcfcf7c]">
                    <div
                      style={{ width: `${row.percentage}%` }}
                      className={`h-[10px] rounded-full ${
                        row.percentage <= 30
                          ? "bg-[#EB262B]"
                          : row.percentage > 30 && row.percentage <= 50
                            ? "bg-[#FFCA28]"
                            : "bg-[#4CAF50]" // Change "bg-green-500" to your desired shade of green
                      }`}></div>
                  </div>
                  <div className="w-[11%] text-xs">
                    {row.quantityUsed} / {row.quantityTotal}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inventory
