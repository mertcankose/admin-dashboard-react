import React from 'react'
import NavButton from './navigation-button'
import EventBox from './event'
import { Notificationİcon } from './icons'
import styles from './navigation-right.module.css'

function NavigationRight() {
  return (
    <div className={styles.nav}>
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
      <EventBox reminder={'Reply to Debie Wilhelm'} time={'10:51'} />
      <EventBox
        reminder={''}
        invitation={true}
        person={'Julie'}
        time={'9:59'}
      />
      <EventBox reminder={'Wireframes with Josh'} time={'9:59'} />
      <EventBox reminder={'Follow up on Wireframes and Design'} time={'9:50'} />
    </div>
  )
}
export default NavigationRight
