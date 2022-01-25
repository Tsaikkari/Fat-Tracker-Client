import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

type FattyFoodProps = {
  fattyFoodId: string
  refreshFattyFoods: () => void
  refreshWeeks: () => void
  name: string
  chosenDate: string
  dayIndex: number
  days: string[]
}

const FattyFood = ({
  fattyFoodId,
  refreshFattyFoods,
  refreshWeeks,
  name,
  chosenDate,
  days,
  dayIndex,
}: FattyFoodProps) => {
  const deleteFattyFoods = async () => {
    const storedToken = localStorage.getItem('authToken')

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${storedToken}`,
      },
    }

    if (window.confirm('Delete fatty foods?')) {
      try {
        await axios.delete(`/api/fattyFoods/${fattyFoodId}`, config)
        refreshFattyFoods()
        refreshWeeks()
      } catch (err) {
        console.log(err)
      }
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
    </div>
  )
}

export default FattyFood
