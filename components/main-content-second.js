import React from 'react'
import styles from './main-content-second.module.css'
import Button from './button'
import Chart from './chart'

function MainContentSecond() {
  return (
    <div className={styles.chartSectionBox}>
      <div className={styles.chartInfoBox}>
        <h1>Statistics</h1>
        <div className={styles.chartTimeBox}>
          <Button>Year</Button>
          <Button>Month</Button>
          <Button>Day</Button>
        </div>
      </div>
      <Chart/>
    </div>
  )
}

export default MainContentSecond
