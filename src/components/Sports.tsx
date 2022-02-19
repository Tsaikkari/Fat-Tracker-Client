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
  const weeks = useSelector((state: AppState) => state.weeks.list)

  return (
    <>
      {weeks.map((week: any) =>
        week.sports.map((s: any) => (
          <div key={s._id}>
            <Sport
              sportId={s._id}
              sportWeekId={s.week}
              weekId={weekId}
              sport={s.sport}
              duration={s.duration}
              date={s.date}
              days={days}
              dayIndex={dayIndex}
            />
          </div>
        )))}
    </>
  )
}

export default Sports
