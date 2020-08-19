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
    display: false,
    text: 'Largest Cities',
    fontSize: 30,
    fontColor: '#000'
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
        <h1 className={styles.chartheader}>Largest Cities</h1>
        <Bar data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox2}`}>
        <h1 className={styles.chartheader}>Largest Cities</h1>
        <Line data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox3}`}>
        <h1 className={styles.chartheader}>Largest Cities</h1>
        <Pie data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox3}`}>
        <h1 className={styles.chartheader}>Largest Cities</h1>
        <Doughnut data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox3}`}>
        <h1 className={styles.chartheader}>Largest Cities</h1>
        <HorizontalBar data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox3}`}>
        <h1 className={styles.chartheader}>Largest Cities</h1>
        <Radar data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox3}`}>
        <h1 className={styles.chartheader}>Largest Cities</h1>
        <Polar data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox3}`}>
        <h1 className={styles.chartheader}>Largest Cities</h1>
        <h1 className={styles.chartheader}>Largest Cities</h1>
        <Bar data={data} legend={legend} options={options} />
      </div>
      <div className={`${styles.chartBox} ${styles.chartBox3}`}>
        <h1 className={styles.chartheader}>Largest Cities</h1>
        <Doughnut data={data} legend={legend} options={options} />
      </div>
    </div>
  )
}

export default Chart
