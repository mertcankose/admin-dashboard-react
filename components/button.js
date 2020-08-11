import React from 'react'
import styles from './button.module.css'
import cn from 'classnames'
import Link from 'next/link'

function LinkButton({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}

function Button({ full = false, children, className, ...props }) {
  const ButtonComponent = props.href ? LinkButton : BaseButton
  return (
    <ButtonComponent
      className={cn(styles.button, full && styles.fullWidth, className)}
      {...props}
    >
      {children}
    </ButtonComponent>
  )
}
export default Button
