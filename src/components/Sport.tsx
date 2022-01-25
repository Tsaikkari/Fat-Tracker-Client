import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

type SportProps = {
  sportId: string
  refreshSports: () => void
  refreshWeeks: () => void
  sport: string
  date: string
  dayIndex: number
  days: string[]
}
const Sport = ({
  sportId,
  refreshSports,
  refreshWeeks,
  sport,
  date,
  dayIndex,
  days
}: SportProps) => {
  const storedToken = localStorage.getItem('authToken')

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`,
    },
  }

  const deleteSports = async () => {
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
    <div>
      {date === days[dayIndex] && sport}
    </div>
  )
}

export default Sport
