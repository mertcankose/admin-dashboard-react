import React, { Component } from 'react'
import {
  Bar,
  Line,
  Pie,
  Doughnut,
  HorizontalBar,
  Radar,
  Polar
} from 'react-chartjs-2'
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
      backgroundColor: [
        '#d54062',
        '#ffa36c',
        '#ebdc87',
        '#799351',
        '#cffffe',
        '#ffc1f3'
      ],
      data: [120, 200, 300, 400, 500, 600]
    }
  ]
}

const legend = {
  display: true,
  position: 'top'
}

const options = {
  title: {
    display: true,
    text: 'Largest Cities',
    fontSize: 20
  },
  chartArea: {
    backgroundColor: 'rgba(251, 85, 85, 0.4)'
  },
  maintainAspectRatio: false
}

function Chart() {
  return (
    <div className={styles.chartBigBox}>
      <div className={`${styles.chartBox} ${styles.chartBox1}`}>
        <Bar data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox2}`}>
        <Line data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox3}`}>
        <Pie data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox3}`}>
        <Doughnut data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox3}`}>
        <HorizontalBar data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox3}`}>
        <Radar data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox3}`}>
        <Polar data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox3}`}>
        <Bar data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox3}`}>
        <Doughnut data={data} legend={legend} options={options} />
      </div>
    </div>
  )
}

export default Chart
