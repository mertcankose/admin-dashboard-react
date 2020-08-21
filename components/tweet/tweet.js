import React, { useReducer } from 'react'
import styles from './tweet.module.css'
import Photo from '../photo/photo'
import { formatDistanceToNowStrict } from 'date-fns'
import IconButton from '../button/iconButton'
import * as Icon from '../icons'

function Tweet({
  dateTime,
  created_at,
  retweet_count,
  favorite_count,
  favorited,
  text,
  user
}) {
  return (
    <article className={styles.tweetBox}>
      {/*avatar*/}
      <div className={styles.avatar}>
        <Photo src={useReducer.profile_image_url_https} />
      </div>

      {/*body*/}
      <div className={styles.tweetBody}>
        <header className={styles.header}>
          <span className={styles.name}>{user ? user.name: "mertcan"}</span>{' '}
          <span> @{user ? user.screen_name: 'mertcankose_'}</span> ·{' '}
          <span>{formatDistanceToNowStrict(new Date(created_at ? created_at : dateTime))}</span>
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
            {retweet_count && <span>{retweet_count}</span>}
          </div>
          {/* like */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Like />
            </IconButton>
            {favorite_count && <span>{favorite_count}</span>}
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
