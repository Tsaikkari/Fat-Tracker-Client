import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'

import Message from './Message'
import { AppState } from '../redux/types'

//TODO: 
//import { deleteFattyFoodsRequest } from '../redux/actions/fattyFood'

type FattyFoodProps = {
  weekId: string
  fattyFoodWeekId: string
  name: string
  chosenDate: string
  dayIndex: number
  days: string[]
}

const FattyFood = ({
  weekId,
  fattyFoodWeekId,
  name,
  chosenDate,
  days,
  dayIndex,
}: FattyFoodProps) => {
  const dispatch = useDispatch()

  const deleteFattyFoods = async () => {
    if (window.confirm('Delete fatty foods?')) {
      
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
        </>
      )}
    </div>
  )
}

export default FattyFood
