import React from 'react'
import { PROFILE } from '../constants/index'
import ProfileBox from '../components/profileBox'
import styles from './main-content-first.module.css'
import Button from '../components/button'
import * as Icon from '../components/icons'

function MainContentFirst() {
  return (
    <div className={styles.mainBox}>
      <div className={styles.mainContentHeadBox}>
        <div className={styles.mainContentHeadBox1}>
          <h1>Session</h1>
          <Button className={styles.exportButton}>
            <Icon.Fill2 />
            <span>Export</span>
          </Button>
        </div>
        <Button className={styles.cardTable}>Card-Table</Button>
      </div>

      <div className={styles.bigProfileBox}>
        {PROFILE.map((profile) => (
          <ProfileBox
            name={profile.name}
            mail={profile.mail}
            role={profile.role}
            photoUrl="https://picsum.photos/58/58"
          />
        ))}
      </div>
    </div>
  )
}

export default MainContentFirst
