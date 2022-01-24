import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styles from './Weeks.module.css'
import AddWeek from '../../components/AddWeek'
import Week from '../../components/Week'

const Weeks = () => {
  const [weeks, setWeeks] = useState([])
  
  const storedToken = localStorage.getItem('authToken')

  const getWeeks = () => {
    axios
      .get('/api/weeks/user', {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const sorted = response.data.payload.reverse()
        setWeeks(sorted)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getWeeks()
    //eslint-disable-next-line
  }, [])

  return (
    <div className={styles.container}>
      {/* TODO: description */}
      <AddWeek refreshWeeks={getWeeks} />
      {weeks.map((week: any) => (
        <div key={week._id}>
          <Week
            refreshWeeks={getWeeks}
            startDate={week.date}
            weekId={week._id}
          />
        </div>
      ))}
    </div>
  )
}

export default Weeks
