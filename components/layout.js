import React from 'react'
import styles from './layout.module.css'
import cn from 'classnames'
import Sidebar from '../components/col-sidebar'
import useWindowSize from '../hooks/useWindowSize'
import CONST from '../constants/index'
import Search from '../components/col-search'

function Layout({ children }) {
  const size = useWindowSize()
  return (
    <div className={cn(styles.layout)}>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>Sidebar</Sidebar>
      <div className={styles.asd}>
        <Search></Search>
        <div className={styles.asd2}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
