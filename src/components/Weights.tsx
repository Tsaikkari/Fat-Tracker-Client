import React from 'react'
import { useSelector } from 'react-redux'

import Weight from './Weight'
import { AppState } from '../redux/types'

type WeightsProps = {
  weekId: string
}

const Weights = ({
  weekId,
}: WeightsProps) => {
  const weights = useSelector((state: AppState) => state.weights.list)
  const filteredWeights = weights && weights.filter(
    (weight: any) => weight.week === weekId
  )

  // TODO: Fix []
  console.log(filteredWeights, 'filteredWeights')

  return (
    <div className=''>
      {filteredWeights &&
        filteredWeights.map((weight: any) => (
          <div key={weight._id}>
            <Weight
              currentWeight={weight.currentWeight}
              goalWeight={weight.goalWeight}
              weightId={weight._id}
            />
          </div>
        ))}
    </div>
  )
}

export default Weights
