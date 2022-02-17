import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

import Message from './Message'

type FattyFoodProps = {
  fattyFoodId: string
  name: string
  chosenDate: string
  dayIndex: number
  days: string[]
}

const FattyFood = ({
  fattyFoodId,
  name,
  chosenDate,
  days,
  dayIndex,
}: FattyFoodProps) => {
  const [errorMessage, setErrorMessage] = useState(undefined)

  console.log(dayIndex, 'dayIndex')
  const deleteFattyFoods = async () => {
    if (window.confirm('Delete fatty foods?')) {
      
    }
  }

  return (
    <div className='fattyfood-container'>
      {chosenDate === days[dayIndex] && (
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
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
    </div>
  )
}

export default FattyFood
