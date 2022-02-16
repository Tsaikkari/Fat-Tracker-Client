import React, { useState } from 'react'

import DayHeader from '../DayHeader'
import AddFattyFoods from '../AddFattyFoods'
import AddSports from '../AddSports'
import FattyFoods from '../FattyFoods'
import Sports from '../Sports'
import styles from './Day.module.css'

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
