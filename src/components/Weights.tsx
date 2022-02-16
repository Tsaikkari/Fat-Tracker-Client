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
  // weeks list [ { id: '', date: '', fattyFoods: [], sports: [], user: 'id', weights: [] }]
  const weeks = useSelector((state: AppState) => state.weeks.list)
  const week = weeks.filter((week: any) => week._id === weekId)
  console.log(weeks, 'weeks')

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
