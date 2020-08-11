import React from 'react'
import { useRouter } from 'next/router'
import styles from './navigation.module.css'
import { MENU } from '../constants/index'
import NavButton from './navigation-button'
import * as Icon from '../components/icons'

function Navigation() {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <NavButton className={styles.bigLogo} href="/">
        <Icon.Logo style={{ fontSize: '48px' }} />
      </NavButton>

      <div className={styles.icons}>
        {MENU.map((menu) => {
          const selected = router.pathname === menu.path
          return (
            <NavButton
              href={menu.path}
              key={menu.key}
              selected={selected}
            >
              {menu.icon}
            </NavButton>
          )
        })}
      </div>
    </nav>
  )
}
export default Navigation
