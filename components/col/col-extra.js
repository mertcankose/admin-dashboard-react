import React from 'react'
import cn from 'classnames'
import styles from './col-extra.module.css'
import NavigationRightFirst from '../navigationRight/navigation-right-first'
import NavSession from '../navigationRight/navigation-right-second'
import MeetingSession from '../navigationRight/navigation-right-third'
import FilesSession from '../navigationRight/navigation-right-fourth'
import ConversationSession from '../navigationRight/navigation-right-fifth'
import SettingsSession from '../navigationRight/navigation-right-sixth'


function Extra({ id }) {
  return (
    <div className={cn(styles.extra)}>
      {id === 'first' && <NavigationRightFirst/>}
      {id === 'session' && <NavSession/> }
      {id === 'meeting' && <MeetingSession/>}
      {id === 'files' && <FilesSession/>}
      {id === 'conversation' && <ConversationSession/>}
      {id === 'settings' && <SettingsSession/>}
    </div>
  )
}

export default Extra
