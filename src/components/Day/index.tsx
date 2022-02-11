import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import DayHeader from '../DayHeader'
import AddFattyFoods from '../AddFattyFoods'
import AddSports from '../AddSports'
import FattyFoods from '../FattyFoods'
import Sports from '../Sports'
import styles from './Day.module.css'
import { getUserFattyFoodsRequest } from '../../redux/actions'
import { getUserSportsRequest } from '../../redux/actions/sports'

type DayProps = {
  days: string[]
  day: string
  dayIndex: number
  weekId: string
}

const Day = ({
  days,
  day,
  dayIndex,
  weekId,
}: DayProps) => {
  const [addFattyFoods, setAddFattyFoods] = useState(false)
  const [addSports, setAddSports] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserSportsRequest())
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    dispatch(getUserFattyFoodsRequest())
    //eslint-disable-next-line
  }, [])

  const handleShowAddFattyFoods = () => {
    setAddFattyFoods(!addFattyFoods)
  }

  const handleShowAddSports = () => {
    setAddSports(!addSports)
  }

  return (
    <main>
      <DayHeader
        handleShowAddFattyFoods={handleShowAddFattyFoods}
        handleShowAddSports={handleShowAddSports}
      />
      {addFattyFoods && (
        <AddFattyFoods
          weekId={weekId}
          addFattyFoods={addFattyFoods}
          setAddFattyFoods={setAddFattyFoods}
          day={day}
        />
      )}
      {addSports && (
        <AddSports
          weekId={weekId}
          addSports={addSports}
          setAddSports={setAddSports}
          day={day}
        />
      )}
      <div className={styles.container}>
        <p className='p-2 mb-0'>{day}</p>
        <div>
          <FattyFoods
            dayIndex={dayIndex}
            days={days}
            weekId={weekId}
          />
          <Sports
            weekId={weekId}
            days={days}
            dayIndex={dayIndex}
          />
        </div>
      </div>
    </main>
  )
}

export default Day
