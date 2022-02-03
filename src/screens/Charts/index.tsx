import React from 'react'

import LineChart from '../../components/LineChart'
import styles from './Charts.module.css'

const Charts = () => {
  return (
    <div className={styles.container}>
      <LineChart />
    </div>
  )
}

export default Charts
