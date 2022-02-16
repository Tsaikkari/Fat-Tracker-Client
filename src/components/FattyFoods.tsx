import React from 'react'
import { useSelector } from 'react-redux'

import FattyFood from './FattyFood'
import { AppState } from '../redux/types'

type FattyFoodsProps = {
  weekId: string
  days: string[]
  dayIndex: number
}

const FattyFoods = ({ days, dayIndex, weekId }: FattyFoodsProps) => {
  const weeks = useSelector((state: AppState) => state.weeks.list)
  const fattyFoods = weeks
    .map((week: any) => week.fattyFoods)
    .filter((ff: any) => ff.week === weekId)

  return (
    <div>
      {fattyFoods &&
        fattyFoods.map((ff: any) => (
          <div key={ff._id}>
            <FattyFood
              fattyFoodId={ff._id}
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
