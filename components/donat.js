import React, { Component } from 'react'
import dynamic from 'next/dynamic'
const DonatChart = dynamic(() => import('react-apexcharts'), { ssr: false })

var state = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },
}

function Donat() {
  return (
    <DonatChart options={state.options} series={state.series} type="donut"/>
  )
}

export default Donat