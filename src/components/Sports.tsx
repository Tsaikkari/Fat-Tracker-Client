import React from 'react'

import Sport from './Sport'

type SportsProps = {
  sports: any[]
  weekId: string
  refreshWeeks: () => void
  refreshSports: () => void
  days: string[]
  dayIndex: number
}

const Sports = ({ 
  sports,
  days,
  dayIndex,
  refreshWeeks,
  refreshSports
}: SportsProps) => {
  return (
    <>
      {sports && sports.map((s: any) => (
        <div key={s._id}>
          <Sport 
            sportId={s._id}
            sport={s.sport}
            duration={s.duration}
            date={s.date}
            days={days}
            dayIndex={dayIndex}
            refreshWeeks={refreshWeeks}
            refreshSports={refreshSports}
          />
        </div>
      ))}
    </>
  )
}

export default Sports
