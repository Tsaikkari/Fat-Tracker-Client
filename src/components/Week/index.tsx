import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Day from '../Day'
import AddWeights from '../EditWeek'
import Weights from '../Weights'
import styles from './Week.module.css'
import Message from '../Message'
import { AppState } from '../../redux/types'

type WeekProps = {
  startDate: string
  fattyFoods: any[]
  sports: any[]
  weekId: string
}

const Week = ({
  startDate,
  weekId,
}: WeekProps) => {
  const [days, setDays] = useState<string[]>([])
  const [achievedWeight, setAchievedWeight] = useState<number | string>('')
  const [addWeights, setAddWeights] = useState(false)
  const [editWeight, setEditWeight] = useState(false)
  const [message, setMessage] = useState('')

  const weeks = useSelector((state: AppState) => state.weeks.list)
  // const weights = weeks
  //   .map((week: any) => week.weights)
  //   .filter((weight: any) => weight.week === weekId)
  const { error, loading } = useSelector((state: AppState) => state.auth)

  const dispatch = useDispatch()

  const handleShowAddWeights = () => {
    setAddWeights(!addWeights)
  }

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

  // const handleShowEditWeight = () => {
  //   setEditWeight(!editWeight)
  //   weights.filter((weight: any) => weight.currentWeight === 0) &&
  //     setMessage('Please add your previous weight and goal weight first')
  //     setTimeout(() => {
  //       setMessage('')
  //     }, 8000)
  // }

  return (
    <div className={styles.container}>
      <header>
        <p className='m-2'>{startDate}</p>
        <Button variant='light' onClick={handleShowAddWeights}>
          <i className='fas fa-weight'></i>
        </Button>

        <Weights
          weekId={weekId}
        />
      </header>
      {addWeights && (
        <AddWeights
          addWeights={addWeights}
          setAddWeights={setAddWeights}
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
        {/* <Button variant='warning' onClick={handleShowEditWeight}>
          Weight at the End of the Week
        </Button> */}
        {/* {editWeight && (
          <EditWeights
            achievedWeight={achievedWeight}
            setAchievedWeight={setAchievedWeight}
            filteredWeights={weights}
            editWeight={editWeight}
            setEditWeight={setEditWeight}
            weekId={weekId}
          />
        )} */}
      </div>
      {error && <Message variant='danger'>{error.message}</Message>}
      {loading && <h3>Loading ...</h3>}
    </div>
  )
}

export default Week
