import React from 'react'
import { useSelector } from 'react-redux'

import Sport from './Sport'
import { AppState } from '../redux/types'

type SportsProps = {
  weekId: string
  days: string[]
  dayIndex: number
}

const Sports = ({
  days,
  dayIndex,
  weekId,
}: SportsProps) => {
  const sports = useSelector((state: AppState) => state.sports.list)
  const filteredSports = sports.filter((sport: any) => sport.week === weekId)
  
  return (
    <>
      {filteredSports &&
        filteredSports.map((s: any) => (
          <div key={s._id}>
            <Sport
              sportId={s._id}
              sport={s.sport}
              duration={s.duration}
              date={s.date}
              days={days}
              dayIndex={dayIndex}
            />
          </div>
        ))}
    </>
  )
}

export default Sports
