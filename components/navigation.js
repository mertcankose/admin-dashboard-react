import React from 'react'
import { useRouter } from 'next/router'
import { MENU } from '../constants/index'
import styles from './navigation.module.css'
import NavButton from './navigation-button'
import * as Icon from '../components/icons'
import TextTitle from '../components/text-title'

function Navigation({ flat = false }) {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <NavButton className={styles.bigLogo} href="/">
        <Icon.Logo style={{ fontSize: '48px' }} />
      </NavButton>

      <div className={styles.iconsBox}>
        {MENU.map((menu) => {
          const showTitle = !flat && menu.title.length > 0
          const selected = router.pathname === menu.path
          return (
            <NavButton
              className={styles.navButton}
              href={menu.path}
              key={menu.key}
              selected={selected}
            >
              {menu.icon}
              {showTitle && (
                <TextTitle className={styles.text}>{menu.title}</TextTitle>
              )}
            </NavButton>
          )
        })}
      </div>
    </nav>
  )
}
export default Navigation
