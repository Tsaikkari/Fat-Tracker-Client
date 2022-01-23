import React, { useState, useEffect } from 'react'

import Day from './Day'

// TODO: prop types

const Week = ({ startDate, weekId }: any) => {
  const [days, setDays] = useState<string[]>([])

  const getWeek = () => {
    const weekdays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
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
      setDays(getWeek())
    }
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <p>{startDate}</p>
      {days.map((day: string, index) => (
        <div key={index}>
          <Day day={day} weekId={weekId} />
        </div>
      ))}
    </>
  )
}

export default Week
