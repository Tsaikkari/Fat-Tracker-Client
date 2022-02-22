import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'

import Message from './Message'
import { AppState } from '../redux/types'

import { deleteFattyFoodRequest } from '../redux/actions/fattyFood'
import { getUserWeeksRequest } from '../redux/actions/weeks'

type FattyFoodProps = {
  weekId: string
  fattyFoodId: string
  fattyFoodWeekId: string
  name: string
  chosenDate: string
  dayIndex: number
  days: string[]
}

const FattyFood = ({
  weekId,
  fattyFoodId,
  fattyFoodWeekId,
  name,
  chosenDate,
  days,
  dayIndex,
}: FattyFoodProps) => {
  const error = useSelector((state: AppState) => state.week.error)
  const dispatch = useDispatch()

  const deleteFattyFoods = async () => {
    if (window.confirm('Delete fatty foods?')) {
      dispatch(deleteFattyFoodRequest(fattyFoodId))
      dispatch(getUserWeeksRequest())
    }
  }

  return (
    <div className='fattyfood-container'>
      {fattyFoodWeekId === weekId && chosenDate === days[dayIndex] && (
        <>
          <p>{name}</p>
          <Button
            variant='danger'
            className='btn-sm'
            onClick={deleteFattyFoods}
          >
            <i className='fas fa-trash'></i>
          </Button>
          {error && <Message>{error.message}</Message>}
        </>
      )}
    </div>
  )
}

export default FattyFood
