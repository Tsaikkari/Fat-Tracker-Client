import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

import Day from '../Day'
import AddWeights from '../AddWeights'
import Weights from '../Weights'
import styles from './Week.module.css'

type WeekWeights = {
  weights: [
    {
      _id: string
      currentWeight: number
      goalWeight: number
      user: string
      week: string
      createdAt: Date
    }
  ]
}

type WeekProps = {
  startDate: string
  refreshWeeks: () => void
  refreshFattyFoods: () => void
  refreshSports: () => void
  fattyFoods: any[]
  sports: any[]
  weekId: string
}

const Week = ({
  startDate,
  refreshWeeks,
  refreshFattyFoods,
  refreshSports,
  fattyFoods,
  sports,
  weekId,
}: WeekProps) => {
  const [days, setDays] = useState<string[]>([])
  const [weights, setWeights] = useState<WeekWeights[]>([])
  const [currentWeight, setCurrentWeight] = useState<number | string>('')
  const [goalWeight, setGoalWeight] = useState<number | string>('')
  const [addWeights, setAddWeights] = useState(false)

  const getWeekDays = () => {
    const weekdays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]
    const result = []
    const date = new Date(startDate)
    let i = weekdays.indexOf(weekdays[date.getDay()])
    let j = weekdays.slice(0, i)

    while (i < weekdays.length) {
      result.push(weekdays[i++])
      if (i === weekdays.length) {
        result.push(...j)
      }
    }
    return result
  }

  useEffect(() => {
    if (startDate) {
      setDays(getWeekDays())
    }
    //eslint-disable-next-line
  }, [])

  const storedToken = localStorage.getItem('authToken')

  const getWeights = () => {
    axios
      .get('/api/weights/user', {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setWeights(response.data.payload)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getWeights()
    //eslint-disable-next-line
  }, [])

  const handleShowAddWeights = () => {
    setAddWeights(!addWeights)
  }

  return (
    <div className={styles.container}>
      <header>
        <p className='m-2'>{startDate}</p>
        <Button variant='light' onClick={handleShowAddWeights}>
          Weight
        </Button>

        <Weights
          refreshWeeks={refreshWeeks}
          refreshWeights={getWeights}
          weights={weights}
          weekId={weekId}
        />
      </header>
      {addWeights && (
        <AddWeights
          currentWeight={currentWeight}
          setCurrentWeight={setCurrentWeight}
          goalWeight={goalWeight}
          setGoalWeight={setGoalWeight}
          refreshWeights={getWeights}
          addWeights={addWeights}
          setAddWeights={setAddWeights}
          weekId={weekId}
        />
      )}
     <div>
      {days.map((day: string, index) => (
        <div key={index}>
          <Day
            day={day}
            days={days}
            dayIndex={index}
            weekId={weekId}
            refreshWeeks={refreshWeeks}
            refreshFattyFoods={refreshFattyFoods}
            refreshSports={refreshSports}
            fattyFoods={fattyFoods}
            sports={sports}
          />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Week
