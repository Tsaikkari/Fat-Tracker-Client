import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import styles from './Weeks.module.css'
import AddWeek from '../../components/AddWeek'
import WeekHeader from '../../components/WeekHeader'
import Week from '../../components/Week'
import Message from '../../components/Message'
import { AuthContext } from '../../context/auth'
import { WeekContext } from '../../context/week'

const Weeks = () => {
  const [fattyFoods, setFattyFoods] = useState<[]>([])
  const [sports, setSports] = useState<[]>([])
  const [addWeek, setAddWeek] = useState(false)

  const handleShowAddWeek = () => {
    setAddWeek(!addWeek)
  }

  const { isLoading } = useContext(AuthContext)
  const { weeks, getWeeks, errorMessage } = useContext(WeekContext)

  const storedToken = localStorage.getItem('authToken')

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
      <WeekHeader handleShowAddWeek={handleShowAddWeek} />
      {addWeek && (
        <AddWeek
          refreshWeeks={getWeeks}
          addWeek={addWeek}
          setAddWeek={setAddWeek}
        />
      )}
      {weeks && weeks.map((week: any) => (
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
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
      {isLoading && <h3>Loading ...</h3>}
    </div>
  )
}

export default Weeks
