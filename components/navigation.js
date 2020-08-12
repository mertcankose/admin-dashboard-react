import React from 'react'
import { useRouter } from 'next/router'
import styles from './navigation.module.css'
import { MENU } from '../constants/index'
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
            <NavButton className={styles.navButtonn} href={menu.path} key={menu.key} selected={selected}>
              {menu.icon}
              {showTitle && <TextTitle className={styles.text}>{menu.title}</TextTitle>}
            </NavButton>
          )
        })}
      </div>
    </nav>
  )
}
export default Navigation
