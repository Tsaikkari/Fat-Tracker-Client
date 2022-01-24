import React from 'react'

import Weight from './Weight'
//TODO: types

const Weights = ({ refreshWeeks, weights, weekId }: any) => {
  const filteredWeights = weights.filter((weight: any) => weight.week === weekId)
  
  return (
    <div className=''>
      {filteredWeights && filteredWeights.map((weight: any) => (
        <div key={weight._id}>
          <Weight 
            refreshWeeks={refreshWeeks}
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
