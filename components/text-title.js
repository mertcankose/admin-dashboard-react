import React from 'react'
import styles from './text-title.module.css'
import cn from 'classnames'

function TextTitle({ bold = false, className,children }) {
  return <h6 className={cn(styles.title,bold && styles.bold,className)}>{children}</h6>
}

export default TextTitle
