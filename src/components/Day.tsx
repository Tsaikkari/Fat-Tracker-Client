import React, { useState, useEffect } from 'react'
import axios from 'axios'

import DayHeader from './DayHeader'
import AddFattyFoods from './AddFattyFoods'
import AddSports from './AddSports'
import Message from './Message'

type DayProps = {
  day: string
  weekId: string
  startDate: string
  refreshWeeks: any
}

const Day = ({ day, weekId, refreshWeeks, startDate }: DayProps) => {
  const [fattyFoods, setFattyFoods] = useState<[]>([])
  const [sports, setSports] = useState<[]>([])
  const [addFattyFoods, setAddFattyFoods] = useState(false)
  const [addSports, setAddSports] = useState(false)
  const [errorMessage, setErrorMessage] = useState(undefined)

  const storedToken = localStorage.getItem('authToken')

  const getFattyFoods = () => {
    axios.get('/api/fattyFoods', {
      headers: { Authorization: `Bearer ${storedToken}` }
    })
    .then((response) => {
      setFattyFoods(response.data.payload)
    })
    .catch((err) => {
      const errorMsg = err.response.data.message
      setErrorMessage(errorMsg)
    })
  }

  useEffect(() => {
    getFattyFoods()
  }, [])

  const getSports = () => {
    axios.get('/api/sports', {
      headers: { Authorization: `Bearer ${storedToken}` }
    })
    .then((response) => {
      setSports(response.data.payload)
    })
    .catch((err) => {
      const errorMsg = err.response.data.message
      setErrorMessage(errorMsg)
    })
  }

  useEffect(() => {
    getSports()
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
      
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
      {/* TODO: */}
      {addFattyFoods && <AddFattyFoods refreshFattyFoods={getFattyFoods}/>}
      {addSports && <AddSports refreshSports={getSports} />}
      <div className='day-container'>
        <p>{day}</p>
        {/* <Weights 
          id={weekId}
          refreshWeeks={refreshWeeks}
          // startingWeight={startingWeight}
          // goalWeight={goalWeight}
          startDate={startDate}
        /> */}
      </div>
    </>
  )
}

export default Day
