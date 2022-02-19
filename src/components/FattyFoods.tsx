import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import FattyFood from './FattyFood'
import { AppState } from '../redux/types'

type FattyFoodsProps = {
  weekId: string
  days: string[]
  dayIndex: number
}

const FattyFoods = ({ days, dayIndex, weekId }: FattyFoodsProps) => {
  // TODO: fix
  const weeks = useSelector((state: AppState) => state.weeks.list)
  const fattyFoods = weeks.map((week: any) => week.fattyFoods)

  console.log(fattyFoods, 'fattyfoods')
  return (
    <div>
      {fattyFoods.map((ff: any) => (
        <div key={ff._id}>
          <FattyFood
            weekId={weekId}
            fattyFoodWeekId={ff.week}
            name={ff.name}
            chosenDate={ff.chosenDate}
            days={days}
            dayIndex={dayIndex}
          />
        </div>
      ))}
    </div>
  )
}

export default FattyFoods
