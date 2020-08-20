import React from 'react'
import cn from 'classnames'
import styles from './photo.module.css'

function Photo({ src = 'https://picsum.photos/50/50', alt = 'me' }) {
  return (
    <div className={cn(styles.photo)}>
      <a href="/">
        <img className={styles.img} src={src} alt={alt} />
      </a>
    </div>
  )
}

export default Photo
