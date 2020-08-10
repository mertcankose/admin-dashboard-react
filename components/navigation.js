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

const MENU = [
  {
    key: 'dashboard',
    icon: <Dashboardİcon />
  },
  {
    key: 'session',
    icon: <Sessionsİcon />
  },
  {
    key: 'meeting',
    icon: <Meetingsİcon />
  },
  {
    key: 'files',
    icon: <FilesBoardİcon />
  },
  {
    key: 'conversation',
    icon: <Conversationsİcon />
  },
  {
    key: 'settings',
    icon: <Settingsİcon />
  }
]

function Navigation({ flat = false, selectedKey = 'conversation' }) {
  return (
    <nav className={styles.nav}>
      <p>{JSON.stringify(flat)}</p>
      <div className={styles.logobox}>
        <NavButton className={styles.firstLogo}>
          <Logo />
        </NavButton>
      </div>

      <div className={styles.icons}>
        {MENU.map((menu) => {
          const selected = selectedKey === menu.key
          return (
            <NavButton key={menu.key} selected={selected}>
              {menu.icon}
            </NavButton>
          )
        })}
      </div>
    </nav>
  )
}
export default Navigation
