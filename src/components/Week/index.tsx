import React, { useState, useEffect, useContext } from 'react'
import { Button } from 'react-bootstrap'

import Day from '../Day'
import AddWeights from '../AddWeights'
import Weights from '../Weights'
import EditWeights from '../EditWeights'
import styles from './Week.module.css'
import Message from '../Message'
import { AuthContext } from '../../context/auth'
import { WeightContext } from '../../context/weight'

type WeekProps = {
  startDate: string
  fattyFoods: any[]
  sports: any[]
  weekId: string
}

const Week = ({
  startDate,
  fattyFoods,
  sports,
  weekId,
}: WeekProps) => {
  const [days, setDays] = useState<string[]>([])
  const [currentWeight, setCurrentWeight] = useState<number | string>('')
  const [achievedWeight, setAchievedWeight] = useState<number | string>('')
  const [goalWeight, setGoalWeight] = useState<number | string>('')
  const [addWeights, setAddWeights] = useState(false)
  const [editWeight, setEditWeight] = useState(false)
  const [message, setMessage] = useState('')

  const { isLoading } = useContext(AuthContext)
  const { weights, getWeights, errorMessage } = useContext(WeightContext)

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

  const handleShowEditWeight = () => {
    setEditWeight(!editWeight)
    weights.filter((weight: any) => weight.currentWeight === 0) &&
      setMessage('Please add your previous weight and goal weight first')
      setTimeout(() => {
        setMessage('')
      }, 8000)
  }

  const filteredWeights = weights && weights.filter(
    (weight: any) => weight.week === weekId
  )

  return (
    <div className={styles.container}>
      <header>
        <p className='m-2'>{startDate}</p>
        <Button variant='light' onClick={handleShowAddWeights}>
          <i className='fas fa-weight'></i>
        </Button>

        <Weights
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
            />
          </div>
        ))}
        {message && <Message variant='danger'>{message}</Message>}
        <Button variant='warning' onClick={handleShowEditWeight}>
          Weight at the End of the Week
        </Button>
        {editWeight && (
          <EditWeights
            achievedWeight={achievedWeight}
            setAchievedWeight={setAchievedWeight}
            filteredWeights={filteredWeights}
            editWeight={editWeight}
            setEditWeight={setEditWeight}
            weekId={weekId}
          />
        )}
      </div>
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
      {isLoading && <h3>Loading ...</h3>}
    </div>
  )
}

export default Week
