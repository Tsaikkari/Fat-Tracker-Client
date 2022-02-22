import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Button } from 'react-bootstrap'
import Message from './Message'
import { AppState } from '../redux/types'

import { updateWeekRequest } from '../redux/actions/week'

type WeightProps = {
  currentWeight: number | string
  goalWeight: number | string
  weekId: string
}

const Weight = ({
  currentWeight,
  goalWeight,
  weekId,
}: WeightProps) => {
  const error = useSelector((state: AppState) => state.week.error)
  const dispatch = useDispatch()

  const deleteWeights = async () => {
    if (window.confirm('Delete weights?')) {
      dispatch(updateWeekRequest({ weekId, currentWeight: '', goalWeight: '' }))
    }
  }

  return (
    <div className='weight-container'>
      <span className='current-weight'>{currentWeight}</span>
      <span className='goal-weight'>{goalWeight}</span>

      <Button variant='danger' className='btn-sm' onClick={deleteWeights}>
        <i className='fas fa-trash'></i>
      </Button>
      {error && <Message variant='danger'>{error.message}</Message>}
    </div>
  )
}

export default Weight
