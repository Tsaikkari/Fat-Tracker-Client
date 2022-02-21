import React from 'react'
import { useSelector } from 'react-redux'

import Weight from './Weight'
import { AppState } from '../redux/types'

type WeightsProps = {
  weekId: string
}

const Weights = ({ weekId }: WeightsProps) => {
  const weeks = useSelector((state: AppState) => state.weeks.list)

  return (
    <div className=''>
      {weeks.map((week: any) => (
        <div key={week.weights._id}>
          <Weight
            currentWeight={week.weights.currentWeight}
            goalWeight={week.weights.goalWeight}
            weightId={week.weights._id}
            weekId={weekId}
          />
        </div>
      ))}
    </div>
  )
}

export default Weights
