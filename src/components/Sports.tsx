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
    <div>
      {sports && sports.map((s: any) => (
        <div key={s._id}>
          <Sport 
            sportId={s._id}
            sport={s.sport}
            date={s.date}
            days={days}
            dayIndex={dayIndex}
            refreshWeeks={refreshWeeks}
            refreshSports={refreshSports}
          />
        </div>
      ))}
    </div>
  )
}

export default Sports
