import React from 'react'
import cn from 'classnames'
import styles from './col-search.module.css'
import SearchSection from './searchSection'

function Search() {
  return (
    <div className={cn(styles.search)}>
      <SearchSection />
    </div>
  )
}

export default Search
