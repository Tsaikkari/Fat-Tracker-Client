import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styles from './Weeks.module.css'
import AddWeek from '../../components/AddWeek'
import Week from '../../components/week'

const Weeks = () => {
  const [weeks, setWeeks] = useState([])
  const [fattyFoods, setFattyFoods] = useState<[]>([])
  const [sports, setSports] = useState<[]>([])

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

  const getFattyFoods = () => {
    axios
      .get('/api/fattyFoods/user', {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setFattyFoods(response.data.payload)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getFattyFoods()
    //eslint-disable-next-line
  }, [])

  const getSports = () => {
    axios
      .get('/api/sports/user', {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setSports(response.data.payload)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getSports()
    //eslint-disable-next-line
  }, [])

  return (
    <div className={styles.container}>
      {/* TODO: description */}
      <AddWeek refreshWeeks={getWeeks} />
      {weeks.map((week: any) => (
        <div key={week._id}>
          <Week
            refreshFattyFoods={getFattyFoods}
            refreshSports={getSports}
            refreshWeeks={getWeeks}
            startDate={week.date}
            weekId={week._id}
            fattyFoods={fattyFoods}
            sports={sports}
          />
        </div>
      ))}
    </div>
  )
}

export default Weeks
