import React from 'react'
import styles from './navigation-right-second.module.css'
import Button from '../components/button'
import NewsLetter from './icons/UndrawNewsletterReWrob'
import MessageCard from './message-card'

function NavigationRightSecond() {
  return (
    <div className={styles.nav}>
      <div className={styles.head}>
        <h2>Chat</h2>
        <Button>SEE ALL</Button>
      </div>
      <div className={styles.messageCardBox}>
        <MessageCard/>
        <MessageCard name="Angela" seen="15 MINUTE" message="Drink?"/>
        <MessageCard name="John" seen="30 MINUTE" message="No,Never"/>
        <MessageCard name="Brad" seen="2 HOUR" message="Tonight?"/>
        <MessageCard name="Ed" seen="6 DAYS" message="Hello"/>
      </div>
      <div className={styles.newsletter}>
        <NewsLetter />
        <Button>BUY UPGRADE</Button>
      </div>
    </div>
  )
}
export default NavigationRightSecond
