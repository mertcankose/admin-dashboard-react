import React from 'react'
import cn from 'classnames'
import styles from './col-sidebar.module.css'
import Navigation from './navigation'

function Sidebar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />
    </div>
  )
}

export default Sidebar
