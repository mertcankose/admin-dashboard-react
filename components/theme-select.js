import React from 'react'
import styles from './theme-select.module.css'
import { useState } from 'react'
import { useContext } from 'react'
import StoreContext from '../store/index'

function ThemeSelect() {
  const store = useContext(StoreContext)

  //const [selectedTheme, setSelectedTheme] = useState('light')
  const THEME = {
    light: 'Light',
    /*dim: 'Dim',*/
    dark: 'Dark'
  }
  return (
    <div className={styles.inputBox}>
      {['light', 'dark'].map((theme) => (
        <label key={theme} className={styles.label}>
          <input
            type="radio"
            value={theme}
            name="theme"
            checked={theme === store.theme}
            onChange={(e) => store.changeTheme(e.target.value)}
          />
          {THEME[theme]}
        </label>
      ))}
    </div>
  )
}

export default ThemeSelect
