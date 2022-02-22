import React from 'react'

type WeightProps = {
  currentWeight: number
  goalWeight: number
}

const Weight = ({
  currentWeight,
  goalWeight,
}: WeightProps) => {
  return (
    <div className='weight-container'>
      <span className='current-weight'>{currentWeight}</span>
      <span className='goal-weight'>{goalWeight}</span>
    </div>
  )
}

export default Weight
