import React from 'react'

import Weight from './Weight'

type WeightsProps = {
  refreshWeeks: () => void
  refreshWeights: () => void
  weights: any[]
  weekId: string
}

const Weights = ({ refreshWeeks, refreshWeights, weights, weekId }: WeightsProps) => {
  const filteredWeights = weights.filter((weight: any) => weight.week === weekId)
  
  return (
    <div className=''>
      {filteredWeights && filteredWeights.map((weight: any) => (
        <div key={weight._id}>
          <Weight 
            refreshWeeks={refreshWeeks}
            refreshWeights={refreshWeights}
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
