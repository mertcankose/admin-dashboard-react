import React from 'react'
import styles from './eventbox.module.css'
import { Tickİcon } from './icons'
//import cn from "classnames"

function EventBox({ invitation, children, person, time, reminder, ...props }) {
  return (
    <div className={styles.box} {...props}>
      <div className={styles.line}></div>
      <span className={styles.time}>{time}</span>
      <p>{reminder}</p>
      {invitation && (
        <div className={styles.invitationBox}>
          <p className={styles.invitationText}>New invitation from {person}</p>
          <div className={styles.eventView}>
            <div className={styles.acceptBox}>
              <div className={styles.tickBase}>
                <Tickİcon />
              </div>
              <span>Accept</span>
            </div>
            <p>View Event</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventBox
