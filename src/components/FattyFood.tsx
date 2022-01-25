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
  const storedToken = localStorage.getItem('authToken')

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`,
    },
  }

  const deleteFattyFoods = async () => {
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
    <div className=''>
      {chosenDate === days[dayIndex] && name}
    </div>
  )
}

export default FattyFood
