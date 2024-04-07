import React, { useEffect, useRef } from "react"
import * as echarts from "echarts/core"
import { GaugeChart } from "echarts/charts"
import { CanvasRenderer } from "echarts/renderers"
import { IoIosArrowDown } from "react-icons/io"

echarts.use([GaugeChart, CanvasRenderer])

const MyGaugeChart = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    const myChart = echarts.init(chartRef.current)

    const option = {
      series: [
        {
          type: "gauge",
          center: ["50%", "60%"],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 100,
          splitNumber: 0,
          itemStyle: {
            color: "#EA6A11",
          },
          progress: {
            show: true,
            width: 30,
          },
          pointer: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              width: 30,
            },
          },
          axisLabel: {
            show: false,
          },
          anchor: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            width: "100%",
            lineHeight: 40,
            borderRadius: 8,
            offsetCenter: [0, "-15%"],
            fontSize: 20,
            fontWeight: "bolder",
            formatter: "{value}%", // Displaying value as percentage
            color: "inherit",
          },
          data: [
            {
              value: 66, // Initial value
            },
          ],
        },
      ],
    }

    myChart.setOption(option)

    // Clean up
    return () => {
      myChart.dispose()
    }
  }, [])

  return (
    <div className="flex min-h-[200px] w-[30%] flex-col justify-center rounded bg-white p-5 shadow-lg">
      <div className="flex gap-3">
        <span className="rubik text-xl font-semibold">Revenue</span>
        <span className="flex cursor-pointer items-center gap-2 text-grey">
          Monthly <IoIosArrowDown />
        </span>
      </div>
      <span className="rubik text-xs text-grey">Total Expense</span>
      <span className="rubik mb-2 mt-3 text-2xl font-bold text-primary">
        $6078.76
      </span>
      <span className="text-sm text-[#82B941]">
        Profit is 66% more than last month
      </span>
      <div
        ref={chartRef}
        style={{
          width: "100%",
          height: "170px",
        }}></div>
    </div>
  )
}

export default MyGaugeChart
