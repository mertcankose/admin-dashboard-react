import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import styles from './chart.module.css'

const data = {
  labels: [
    'Boston',
    'Worcester',
    'Springfield',
    'Lowell',
    'Cambridge',
    'New Bedford'
  ],
  datasets: [
    {
      label: 'Population',
      backgroundColor: ['red', 'blue', 'yellow', 'green', 'black', 'pink'],
      data: [120, 200, 300, 400, 500, 600]
    }
  ]
}

const legend = {
  display: true,
  position: 'right'
}

const options = {
  title: {
    display: true,
    text: 'Largest Cities in Massachusetts',
    fontSize: 25
  },
  maintainAspectRatio: false
}

function Chart() {
  return (
    <div className={styles.chartBox}>
      <Bar data={data} legend={legend} width={700} height={500} options={options} />
      <Bar data={data} legend={legend} width={700} height={500} options={options} />
      <Bar data={data} legend={legend} width={700} height={500} options={options} />
    </div>
  )
}

export default Chart
