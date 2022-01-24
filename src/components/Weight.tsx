import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

const Weight = ({ currentWeight, goalWeight, refreshWeeks, weightId }: any) => {
  const storedToken = localStorage.getItem('authToken')

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`,
    },
  }

  // TODO: deletes after refresh
  const deleteWeights = async () => {
    if (window.confirm('Delete weights?')) {
      try {
        await axios.delete(`/api/weights/${weightId}`, config)
        refreshWeeks()
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div>
      <>
        <span className='m-3'>{currentWeight}</span>
        <span className='m-3'>{goalWeight}</span>
      </>

      <Button variant='danger' className='btn-sm' onClick={deleteWeights}>
        <i className='fas fa-trash'></i>
      </Button>
    </div>
  )
}

export default Weight
