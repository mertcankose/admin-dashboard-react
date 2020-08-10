import React from 'react'
import NavButton from './navigation-button'
import {
  Logo,
  Dashboardİcon,
  Sessionsİcon,
  Meetingsİcon,
  FilesBoardİcon,
  Conversationsİcon,
  Settingsİcon
} from './icons'
import styles from './navigation.module.css'

function Navigation({ flat=false, selectedKey }) {
  return (
    <nav className={styles.nav}>
    <p>{JSON.stringify(flat)}</p>
      <div className={styles.logobox}>
        <NavButton className={styles.firstLogo}>
          <Logo />
        </NavButton>
      </div>
      <div className={styles.icons}>
        <NavButton selected={selectedKey === 'dashboard'}>
          <Dashboardİcon />
        </NavButton>

        <NavButton selected={selectedKey === 'session'}>
          <Sessionsİcon />
        </NavButton>

        <NavButton selected={selectedKey === 'meeting'}>
          <Meetingsİcon />
        </NavButton>

        <NavButton selected={selectedKey === 'files'}>
          <FilesBoardİcon />
        </NavButton>

        <NavButton selected={selectedKey === 'conversation'}>
          <Conversationsİcon />
        </NavButton>

        <NavButton selected={selectedKey === 'settings'}>
          <Settingsİcon />
        </NavButton>
      </div>
    </nav>
  )
}
export default Navigation
