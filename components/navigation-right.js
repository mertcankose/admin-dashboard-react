import React from 'react'
import NavButton from './navigation-button'
import { Notificationİcon } from './icons'
import styles from './navigation-right.module.css'

function NavigationRight() {
  return (
    <nav className={styles.nav}>
      <div className={styles.bigNotificationBox}>
        <NavButton notify={17}>
          <div className={styles.notificationBase}>
            <Notificationİcon />
          </div>
        </NavButton>
        <div className={styles.notificationInfo}>
          <h4>FORECAST</h4>
          <p>14 FEBRUARY</p>
        </div>
      </div>
    </nav>
  )
}
export default NavigationRight
