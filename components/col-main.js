import React from 'react'
import cn from 'classnames'
import styles from './col-main.module.css'
import ProfileBox from './profileBox'

const PROFILE = [
  {
    name: 'Mertcan',
    mail: 'mertcankose142@gmail.com',
    role: 'Developer'
  },
  {
    name: 'Jone',
    mail: 'jone142@gmail.com',
    role: 'Creator'
  },
  {
    name: 'Angela',
    mail: 'angela142@gmail.com',
    role: 'Engineer'
  }
]

function Main({ children }) {
  return (
    <div className={cn(styles.main)}>
      {/*children*/}
      {PROFILE.map((profile) => (
        <ProfileBox
          name={profile.name}
          mail={profile.mail}
          role={profile.role}
          photoUrl="https://picsum.photos/58/58"
        />
      ))}
    </div>
  )
}

export default Main
