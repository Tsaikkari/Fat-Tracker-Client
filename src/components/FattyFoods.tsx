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
  const weeks = useSelector((state: AppState) => state.weeks.list)

  const fattyFoods = weeks.map((week: any) => week.fattyFoods)
  const filteredFattyFoods = fattyFoods.filter((ff: any) => ff.filter((f: any) => f.week === weekId))

  console.log(filteredFattyFoods, 'FFF')
  return (
    <div>
      {filteredFattyFoods &&
        filteredFattyFoods.map((ff: any) => (
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
