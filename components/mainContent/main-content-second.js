import React from 'react'
import styles from './main-content-second.module.css'
import Button from '../button/button'
import Chart from '../chart/chart'
import TextTitle from '../textTitle/text-title'

function MainContentSecond() {
  return (
    <div className={styles.chartSectionBox}>
      <div className={styles.chartInfoBox}>
      <TextTitle bold>Chart.js</TextTitle>
       
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
