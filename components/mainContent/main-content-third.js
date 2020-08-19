import React from 'react'
import styles from './main-content-third.module.css'
import ApexSection from '../apex/apex'
import TextTitle from '../textTitle/text-title'

function MainContentThird() {
  return (
    <div className={styles.apexSectionBox}>
    <TextTitle bold>APEXCHART.js</TextTitle>
      <ApexSection />
    </div>
  )
}

export default MainContentThird
