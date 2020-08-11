import React from 'react'
import cn from 'classnames'
import styles from './col-extra.module.css'
import NavRight from './navigation-right'

function Extra({ id }) {
  return (
    <div className={cn(styles.extra)}>
      {id === 'first' && <NavRight />}
      {/*id === 'session' && <NavSession/> */}
      {/*id === 'meeting' && <MeetingSession/> */}
      {/*id === 'files' && <FilesSession/> */}
      {/*id === 'conversation' && <ConversationSession/> */}
      {/*id === 'settings' && <SettingsSession/> */}
    </div>
  )
}

export default Extra
