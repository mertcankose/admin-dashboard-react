import React, { Component } from 'react'
import dynamic from 'next/dynamic'
const ColumnChart = dynamic(() => import('react-apexcharts'), { ssr: false })

var state = {
  series: [
    {
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }
  ],
  options: {
    chart: {
      type: 'bar'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top' // top, center, bottom
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%'
      },
      offsetY: -24,
      style: {
        fontSize: '10px',
        colors: ['#304758']
      }
    },

    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      position: 'top',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: true
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + '%'
        }
      }
    },
    title: {
      text: 'Monthly Inflation in Argentina, 2002',
      floating: true,
      offsetY: 120,
      align: 'right',
      style: {
        color: '#444',
        fontWeight: 'bold',

      }
    }
  }
}

function ColumnBar() {
  return (
    <ColumnChart options={state.options} series={state.series} type="bar" width='100%' />
  )
}

export default ColumnBar
