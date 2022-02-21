import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

import Message from './Message'

type WeightProps = {
  currentWeight: number | string
  goalWeight: number | string
  weightId: string
  weekId: string
}

const Weight = ({
  currentWeight,
  goalWeight,
  weightId,
  weekId
}: WeightProps) => {
  const [errorMessage, setErrorMessage] = useState(undefined)
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
      } catch (err: any) {
        const errorMsg = err.message
        setErrorMessage(errorMsg)
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
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
    </div>
  )
}

export default Weight
