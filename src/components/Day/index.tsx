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
  fattyFoods: any[]
  sports: any[]
  refreshWeeks: () => void
  refreshFattyFoods: () => void
  refreshSports: () => void
}

const Day = ({
  days,
  day,
  dayIndex,
  weekId,
  refreshWeeks,
  refreshFattyFoods,
  refreshSports,
  fattyFoods,
  sports,
}: DayProps) => {
  const [name, setName] = useState('')
  const [chosenDate, setChosenDate] = useState('')
  const [sport, setSport] = useState('')
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('')
  const [addFattyFoods, setAddFattyFoods] = useState(false)
  const [addSports, setAddSports] = useState(false)

  const handleShowAddFattyFoods = () => {
    setAddFattyFoods(!addFattyFoods)
  }

  const handleShowAddSports = () => {
    setAddSports(!addSports)
  }

  // TODO: weight and actual date update components
  return (
    <main>
      <DayHeader
        handleShowAddFattyFoods={handleShowAddFattyFoods}
        handleShowAddSports={handleShowAddSports}
      />
      {addFattyFoods && (
        <AddFattyFoods
          refreshFattyFoods={refreshFattyFoods}
          weekId={weekId}
          addFattyFoods={addFattyFoods}
          setAddFattyFoods={setAddFattyFoods}
          name={name}
          setName={setName}
          chosenDate={chosenDate}
          setChosenDate={setChosenDate}
          day={day}
        />
      )}
      {addSports && (
        <AddSports
          refreshSports={refreshSports}
          weekId={weekId}
          addSports={addSports}
          setAddSports={setAddSports}
          sport={sport}
          setSport={setSport}
          date={date}
          setDate={setDate}
          duration={duration}
          setDuration={setDuration}
          day={day}
        />
      )}
      <div className={styles.container}>
        <div>
          <p className='p-2 mb-0'>{day}</p>
          <FattyFoods
            fattyFoods={fattyFoods}
            dayIndex={dayIndex}
            days={days}
            weekId={weekId}
            refreshWeeks={refreshWeeks}
            refreshFattyFoods={refreshFattyFoods}
          />
          <Sports
            sports={sports}
            weekId={weekId}
            days={days}
            dayIndex={dayIndex}
            refreshWeeks={refreshWeeks}
            refreshSports={refreshSports}
          />
        </div>
      </div>
    </main>
  )
}

export default Day
