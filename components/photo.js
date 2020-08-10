import React from 'react'
import cn from 'classnames'
import styles from "./photo.module.css"

function Photo({
  src = 'https://pbs.twimg.com/profile_images/1260188387820134407/Eq1Fb2Yy_400x400.jpg',
  alt='me'
}) {
  return (
    <div className={cn(styles.photo)}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  )
}

export default Photo
