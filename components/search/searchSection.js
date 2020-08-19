import React from 'react'
import styles from './searchSection.module.css'
import Photo from '../photo/photo'
import { Searchİcon, PaperPlaneİcon } from '../icons'
import Button from '../button/button'
import { SIZES } from '../../constants/index'
import useWindowSize from '../../hooks/useWindowSize'

function Search() {
  const size = useWindowSize()
  return (
    <div className={styles.box}>
      <form action="/" method="post">
        <label htmlFor="search">
          <Searchİcon />
        </label>

        <input
          type="text"
          placeholder="Find a user, team, meeting…"
          id="search"
        />
      </form>

      {size.width > SIZES.MOBILE_SIZE && (
        <div className={styles.profileBox}>
          <Button>
            <PaperPlaneİcon />
            <span>Invite</span>
          </Button>
          <Photo />
        </div>
      )}
    </div>
  )
}

export default Search
