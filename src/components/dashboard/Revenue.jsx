import React, { useEffect, useRef } from "react"
import * as echarts from "echarts/core"
import { GaugeChart } from "echarts/charts"
import { CanvasRenderer } from "echarts/renderers"

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
    <div
      ref={chartRef}
      style={{ width: "30%", height: "200px" }}
      className="rounded bg-white shadow-lg"
    />
  )
}

export default MyGaugeChart
