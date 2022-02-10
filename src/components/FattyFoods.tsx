import React from 'react'

import FattyFood from './FattyFood'

type FattyFoodsProps = {
  fattyFoods: any[]
  weekId: string
  days: string[]
  dayIndex: number
}

const FattyFoods = ({
  days,
  dayIndex,
  fattyFoods,
  weekId,
}: FattyFoodsProps) => {
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
