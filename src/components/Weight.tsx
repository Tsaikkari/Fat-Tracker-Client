import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

type WeightProps = {
  currentWeight: number | string
  goalWeight: number | string
  refreshWeeks: () => void
  refreshWeights: () => void
  weightId: string
}

const Weight = ({
  currentWeight,
  goalWeight,
  refreshWeeks,
  refreshWeights,
  weightId,
}: WeightProps) => {
  const deleteWeights = async () => {
    const storedToken = localStorage.getItem('authToken')

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${storedToken}`,
      },
    }

    if (window.confirm('Delete weights?')) {
      try {
        await axios.delete(`/api/weights/${weightId}`, config)
        refreshWeights()
        refreshWeeks()
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className='weight-container'>
      <span className='current-weight'>{currentWeight}</span>
      <span className='goal-weight'>{goalWeight}</span>

      <Button variant='danger' className='btn-sm' onClick={deleteWeights}>
        <i className='fas fa-trash'></i>
      </Button>
    </div>
  )
}

export default Weight
