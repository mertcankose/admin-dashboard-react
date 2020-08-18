import React from 'react'
import cn from 'classnames'
import styles from './col-extra.module.css'
import NavigationRightFirst from './navigation-right-first'
import NavSession from './navigation-right-second'
import MeetingSession from './navigation-right-third'
import FilesSession from './navigation-right-fourth'
import ConversationSession from './navigation-right-fifth'
import SettingsSession from './navigation-right-sixth'


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
