import React from 'react'
import styles from './tweet.module.css'
import Photo from '../photo/photo'
import { formatDistanceToNowStrict } from 'date-fns'
import IconButton from '../button/iconButton'
import * as Icon from '../icons'

function Tweet({ name, slug, dateTime, text }) {
  return (
    <article className={styles.tweetBox}>
      {/*avatar*/}
      <div className={styles.avatar}>
        <Photo />
      </div>

      {/*body*/}
      <div className={styles.tweetBody}>
        <header className={styles.header}>
          <span className={styles.name}>{name}</span> <span> @{slug}</span> ·{' '}
          <span>{formatDistanceToNowStrict(dateTime)}</span>
        </header>
        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>
          {/* reply */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Reply />
            </IconButton>
            <span>3</span>
          </div>
          {/* retweet */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Retweet />
            </IconButton>
            <span>12</span>
          </div>
          {/* like */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Like />
            </IconButton>
          </div>
          {/* share */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Share />
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default Tweet
