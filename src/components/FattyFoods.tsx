import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FattyFood from './FattyFood'
import { AppState } from '../redux/types'
import { getUserFattyFoodsRequest } from '../redux/actions/fattyFoods'

type FattyFoodsProps = {
  weekId: string
  days: string[]
  dayIndex: number
}

const FattyFoods = ({
  days,
  dayIndex,
  weekId,
}: FattyFoodsProps) => {

  const fattyFoods = useSelector((state: AppState) => state.fattyFoods.list)
  const filteredFattyFoods = fattyFoods.filter((ff: any) => ff.week === weekId)

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
