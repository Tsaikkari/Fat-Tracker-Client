import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Weight from './Weight'
import { AppState } from '../redux/types'

type WeightsProps = {
  weekId: string
}

const Weights = ({
  weekId,
}: WeightsProps) => {
  const weeks = useSelector((state: AppState) => state.weeks.list)
  // TODO:
  return (
    <div className=''>
      {/* {weights ?
        weights.map((weight: any) => (
          <div key={weight._id}>
            <Weight
              currentWeight={weight.currentWeight}
              goalWeight={weight.goalWeight}
              weightId={weight._id}
            />
          </div>
        )) : null} */}
    </div>
  )
}

export default Weights
