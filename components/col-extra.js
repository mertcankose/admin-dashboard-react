import React from 'react'
import cn from 'classnames'
import styles from './col-extra.module.css'
import NavRight from './navigation-right'

function Extra() {
  return (
    <div className={cn(styles.extra)}>
      <NavRight />
    </div>
  )
}

export default Extra
