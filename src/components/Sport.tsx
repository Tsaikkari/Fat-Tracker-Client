import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

import Message from './Message'

type SportProps = {
  sportId: string
  sport: string
  duration: number
  date: string
  dayIndex: number
  days: string[]
}
const Sport = ({
  sportId,
  sport,
  duration,
  date,
  dayIndex,
  days,
}: SportProps) => {
  const [errorMessage, setErrorMessage] = useState(undefined)

  const deleteSports = async () => {
    const storedToken = localStorage.getItem('authToken')

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${storedToken}`,
      },
    }

    if (window.confirm('Delete sports?')) {
      try {
        await axios.delete(`/api/sports/${sportId}`, config)
      } catch (err: any) {
        const errorMsg = err.message
        setErrorMessage(errorMsg)
      }
    }
  }

  return (
    <>
      {date === days[dayIndex] && (
        <div className='sport-container'>
          <p>{sport}</p>
          <p>{duration} min</p>
          <Button variant='danger' className='btn-sm' onClick={deleteSports}>
            <i className='fas fa-trash'></i>
          </Button>
        </div>
      )}
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
    </>
  )
}

export default Sport
