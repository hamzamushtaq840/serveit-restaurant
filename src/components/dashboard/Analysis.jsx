import React, { useEffect, useRef } from "react"
import * as echarts from "echarts/core"
import { LineChart } from "echarts/charts"
import {
  TooltipComponent,
  TitleComponent,
  GridComponent,
} from "echarts/components"
import { CanvasRenderer } from "echarts/renderers"

echarts.use([
  LineChart,
  TooltipComponent,
  TitleComponent,
  GridComponent,
  CanvasRenderer,
])

const MyLineChart = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    const myChart = echarts.init(chartRef.current)

    const data = [
      ["Jan", 116],
      ["Feb", 280],
      ["Mar", 133],
      ["April", 186],
      ["May", 173],
      ["June", 385],
      ["July", 73],
      ["Aug", 468],
      ["Sep", 92],
      ["Oct", 230],
      ["Nov", 145],
      ["Dec", 439],
    ]

    const dateList = data.map(function (item) {
      return item[0]
    })

    const valueList = data.map(function (item) {
      return item[1]
    })

    const option = {
      xAxis: {
        type: "category",
        data: dateList,
        axisLabel: {
          interval: 0, // Show all labels
          rotate: 45, // Rotate labels for better visibility
        },
        splitLine: {
          show: false, // Hide split lines
        },
        boundaryGap: false, // Start the line from the beginning of the chart
      },
      yAxis: {
        axisLabel: {
          formatter: function (value) {
            return value + "$" // Add dollar sign to the value
          },
        },
        splitLine: {
          show: false, // Hide split lines
        },
      },
      grid: {
        containLabel: true, // Adjusted to contain only the chart area without x-axis lines
      },
      tooltip: {
        trigger: "axis",
        formatter: function (params) {
          const month = params[0].axisValue // Get the month
          const value = params[0].value + "$ Sales" // Add dollar sign to the tooltip value
          return `${month}: ${value}` // Combine month and value in tooltip
        },
      },
      series: [
        {
          type: "line",
          showSymbol: false,
          data: valueList,
          lineStyle: {
            width: 3,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#EA6A12",
                },
                {
                  offset: 1,
                  color: "#EA6A12",
                },
              ],
            },
          },
          areaStyle: {
            // Add shadow just under the line
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#EA6A12",
              },
              {
                offset: 0.75, // Adjust this value to control the shadow length
                color: "rgba(234,106,18,0)", // Transparent color for the shadow
              },
              {
                offset: 1,
                color: "rgba(234,106,18,0)", // Transparent color for the shadow
              },
            ]),
          },
        },
      ],
    }

    option && myChart.setOption(option)

    // Clean up
    return () => {
      myChart.dispose()
    }
  }, [])

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />
}

export default MyLineChart
