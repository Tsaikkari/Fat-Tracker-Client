import React from 'react'

import FattyFood from './FattyFood'

type FattyFoodsProps = {
  fattyFoods: any[]
  weekId: string
  refreshWeeks: () => void
  refreshFattyFoods: () => void
  days: string[]
  dayIndex: number
}

const FattyFoods = ({
  days,
  dayIndex,
  fattyFoods,
  refreshWeeks,
  refreshFattyFoods
}: FattyFoodsProps) => {
  return (
    <div>
      {fattyFoods &&
        fattyFoods.map((ff: any) => (
          <div key={ff._id}>
            <FattyFood
              refreshWeeks={refreshWeeks}
              refreshFattyFoods={refreshFattyFoods}
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
