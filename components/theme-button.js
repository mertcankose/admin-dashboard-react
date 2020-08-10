import React from 'react'
import Button from './button'
import styles from './theme-button.module.css'
import cn from 'classnames'

function ThemeButton({className, children,big=false, ...props }) {
  return (
    <Button className={cn(styles.button,big && styles.big, className)} {...props}>
      {children}
    </Button>
  )
}
export default ThemeButton
