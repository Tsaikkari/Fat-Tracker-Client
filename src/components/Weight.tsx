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

const Weight = ({ currentWeight, goalWeight, refreshWeeks, refreshWeights, weightId }: WeightProps) => {
  const storedToken = localStorage.getItem('authToken')

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`,
    },
  }

  const deleteWeights = async () => {
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
    <div>
      <>
        <span className='m-2'>{currentWeight}</span>
        <span className='m-2'>{goalWeight}</span>
      </>

      <Button variant='danger' className='btn-sm' onClick={deleteWeights}>
        <i className='fas fa-trash'></i>
      </Button>
    </div>
  )
}

export default Weight
