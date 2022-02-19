import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import FattyFood from './FattyFood'
import { AppState } from '../redux/types'

type FattyFoodsProps = {
  weekId: string
  days: string[]
  dayIndex: number
}

//TODO: should update weeks without refresh

const FattyFoods = ({ days, dayIndex, weekId }: FattyFoodsProps) => {
  const weeks = useSelector((state: AppState) => state.weeks.list)

  return (
    <div>
      {weeks.map((week: any) =>
        week.fattyFoods.map((ff: any) => (
          <div key={ff._id}>
            <FattyFood
              weekId={weekId}
              fattyFoodId={ff._id}
              fattyFoodWeekId={ff.week}
              name={ff.name}
              chosenDate={ff.chosenDate}
              days={days}
              dayIndex={dayIndex}
            />
          </div>
        ))
      )}
    </div>
  )
}

export default FattyFoods
