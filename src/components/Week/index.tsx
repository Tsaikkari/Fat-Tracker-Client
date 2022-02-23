import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import Day from '../Day'
import AddWeights from '../AddWeights'
import AddAchievedWeight from '../AddAchievedWeight'
import Weight from '../Weight'
import styles from './Week.module.css'
import Message from '../Message'
import { AppState } from '../../redux/types'

type WeekProps = {
  startDate: string
  weights: any
  weekId: string
}

const Week = ({ startDate, weekId, weights }: WeekProps) => {
  const [days, setDays] = useState<string[]>([])
  const [addWeights, setAddWeights] = useState(false)
  const [editWeight, setEditWeight] = useState(false)
  const [message, setMessage] = useState('')

  const weeks = useSelector((state: AppState) => state.weeks.list)
  console.log(weeks, 'weeks')

  const getWeekDays = () => {
    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
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

  const handleShowAddWeights = () => {
    setAddWeights(!addWeights)
  }

  const handleShowAddWeight = () => {
    setEditWeight(!editWeight)
    const week = weeks.find((week: any) => week._id === weekId)
    !week?.weights.currentWeight &&
      setMessage('Please add your previous weight and goal weight first')
    setTimeout(() => {
      setMessage('')
    }, 8000)
  }

  return (
    <div className={styles.container}>
      <header>
        <p className='m-2'>{startDate}</p>
        <Button variant='light' onClick={handleShowAddWeights}>
          <i className='fas fa-weight'></i>
        </Button>
        <div>
          {weights && weights.currentWeight && weekId && (
            <Weight
              currentWeight={weights.currentWeight}
              goalWeight={weights.goalWeight}
            />
          )}
        </div>
      </header>
      {addWeights && (
        <AddWeights
          addWeights={addWeights}
          setAddWeights={setAddWeights}
          weekId={weekId}
        />
      )}
      <div>
        {days.map((day: string, index) => (
          <div key={index}>
            <Day day={day} days={days} dayIndex={index} weekId={weekId} />
          </div>
        ))}
        {message && <Message variant='danger'>{message}</Message>}
        <Button variant='warning' onClick={handleShowAddWeight}>
          Weight at the End of the Week
        </Button>
        {editWeight && (
          <AddAchievedWeight
            editWeight={editWeight}
            setEditWeight={setEditWeight}
            weekId={weekId}
          />
        )}
      </div>
      {/* {error && <Message variant='danger'>{error.message}</Message>} */}
      {/* {loading && <h3>Loading ...</h3>} */}
    </div>
  )
}

export default Week
