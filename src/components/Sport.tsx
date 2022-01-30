import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

type SportProps = {
  sportId: string
  refreshSports: () => void
  refreshWeeks: () => void
  sport: string
  duration: number
  date: string
  dayIndex: number
  days: string[]
}
const Sport = ({
  sportId,
  refreshSports,
  refreshWeeks,
  sport,
  duration,
  date,
  dayIndex,
  days,
}: SportProps) => {
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
        refreshSports()
        refreshWeeks()
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <>
      {date === days[dayIndex] && (
        <div className='sport-container'>
          <p>{sport}</p>
          <p>{duration} min</p>
          <Button 
            variant='danger' 
            className='btn-sm' 
            onClick={deleteSports}
          >
            <i className='fas fa-trash'></i>
          </Button>
        </div>
      )}
    </>
  )
}

export default Sport
