import React from 'react'

import Sport from './Sport'

type SportsProps = {
  sports: any[]
  weekId: string
  days: string[]
  dayIndex: number
}

const Sports = ({
  sports,
  days,
  dayIndex,
  weekId,
}: SportsProps) => {
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
