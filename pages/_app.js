import React from 'react'
import '../styles/app.css'
import '../styles/variables.css'
import StoreContext from '../store/index'
import { useState, useEffect, useLayoutEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(null)

  /*UseLayoutEffect içinde planlanan güncellemeler, tarayıcının boyama şansı bulamadan eşzamanlı olarak temizlenir.*/
  useEffect(() => {
    const theme = localStorage.getItem('THEME') || 'light'

    setTheme(theme)
  }, [])

  /* we recommend starting with useEffect first and only trying useLayoutEffect if that causes a problem. */

  const changeTheme = (theme) => {
    setTheme(theme)
    localStorage.setItem('THEME', theme)
  }

  useEffect(() => {
    if (!theme) return
    const $html = document.querySelector('html')
    $html.classList.remove('light')
    $html.classList.remove('dim')
    $html.classList.remove('dark')
    $html.classList.add(theme.toString())
  }, [theme])

  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  )
}

export default MyApp
