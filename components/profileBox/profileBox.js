import React from 'react'
import cn from 'classnames'
import styles from './profileBox.module.css'
import Photo from '../photo/photo'
/*import { ShapeGraph } from '../icons'*/
import EqualizerIcon from '@material-ui/icons/Equalizer';

function ProfileBox({
  name = 'Samuel Spencer',
  mail = 'sasp@egament.com',
  role = 'Creative Director',
  photoUrl='https://pbs.twimg.com/profile_images/1260188387820134407/Eq1Fb2Yy_400x400.jpg'
}) {
  return (
    <div className={cn(styles.box)}>
      <div className={styles.head}>
        <Photo src={photoUrl}/>
        <div className={styles.headText}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.mail}>{mail}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomTop}>
          <div className={styles.bottomTop1}>
            <span>Invites</span>
            <span>03</span>
          </div>
          <div className={styles.bottomTop2}>
            <span>Pending</span>
            <span className={styles.bottomTop2Number}>02</span>
          </div>
        </div>
        <div className={styles.bottomBottom}>
          <span>Overall activity</span>
          <EqualizerIcon />
        </div>
      </div>
    </div>
  )
}

export default ProfileBox
