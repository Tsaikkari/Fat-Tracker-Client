import React from 'react'

import Weight from './Weight'

type WeightsProps = {
  weights: any[]
  weekId: string
}

const Weights = ({
  weights,
  weekId,
}: WeightsProps) => {
  const filteredWeights = weights.filter(
    (weight: any) => weight.week === weekId
  )

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
