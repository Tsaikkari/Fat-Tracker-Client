import React, { useState, useEffect } from 'react'
import axios from 'axios'

import DayHeader from './DayHeader'
import AddFattyFoods from './AddFattyFoods'
import AddSports from './AddSports'
import Message from './Message'

type DayProps = {
  day: string
  weekId: string
}

const Day = ({ day, weekId }: DayProps) => {
  const [fattyFoods, setFattyFoods] = useState<[]>([])
  const [name, setName] = useState('')
  const [chosenDate, setChosenDate] = useState('')
  const [actualDate, setActualDate] = useState('')
  const [sports, setSports] = useState<[]>([])
  const [sport, setSport] = useState('')
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState(0)
  const [addFattyFoods, setAddFattyFoods] = useState(false)
  const [addSports, setAddSports] = useState(false)

  const storedToken = localStorage.getItem('authToken')

  const getFattyFoods = () => {
    axios
      .get('/api/fattyFoods', {
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
      .get('/api/sports', {
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

  const handleShowAddFattyFoods = () => {
    setAddFattyFoods(!addFattyFoods)
  }

  const handleShowAddSports = () => {
    setAddSports(!addSports)
  }

  return (
    <>
      <DayHeader
        handleShowAddFattyFoods={handleShowAddFattyFoods}
        handleShowAddSports={handleShowAddSports}
      />
      {/* TODO: */}
      {addFattyFoods && (
        <AddFattyFoods
          refreshFattyFoods={getFattyFoods}
          weekId={weekId}
          addFattyFoods={addFattyFoods}
          setAddFattyFoods={setAddFattyFoods}
          name={name}
          setName={setName}
          chosenDate={chosenDate}
          setChosenDate={setChosenDate}
          actualDate={setActualDate}
        />
      )}
      {addSports && (
        <AddSports
          refreshSports={getSports}
          weekId={weekId}
          addSports={addSports}
          setAddSports={setAddSports}
          sport={sport}
          setSport={setSport}
          date={date}
          setDate={setDate}
          duration={duration}
          setDuration={setDuration}
        />
      )}
      <div className='day-container'>
        <p>{day}</p>
      </div>
    </>
  )
}

export default Day
