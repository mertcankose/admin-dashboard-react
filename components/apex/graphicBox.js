import React from 'react'
import GraphicEqIcon from '@material-ui/icons/GraphicEq'
import styles from './graphicBox.module.css'
import cn from 'classnames'

function Graph({
  graphHead = 'Orders',
  graphData = '12.924',
  color = 'red',
  className,
  ...props
}) {
  return (
    <div className={cn(styles.graphBox, className)}>
      <GraphicEqIcon style={{ color: `${color}` }} />

      <p>{graphHead}</p>
      <span>{graphData}</span>
    </div>
  )
}

export default Graph
