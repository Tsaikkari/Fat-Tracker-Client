import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

//TODO: types

const Weights = ({ id, refreshWeeks, startingWeight, goalWeight }: any) => {
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
        await axios.delete(`/api/weights/${id}`, config)
        refreshWeeks()
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className='weight-container'>
      <span>{startingWeight}</span>
      <span>{goalWeight}</span>
      <Button variant='danger' className='btn-sm' onClick={deleteWeights}>
        <i className='fas fa-trash'></i>
      </Button>
    </div>
  )
}

export default Weights
