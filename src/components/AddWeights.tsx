import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import Message from './Message'

type AddWeightsProps = {
  addWeights: boolean
  setAddWeights: (arg0: boolean) => void
  currentWeight: number | string
  setCurrentWeight: any
  goalWeight: number | string
  setGoalWeight: any
  weekId: string
}

const AddWeights = ({
  addWeights,
  setAddWeights,
  currentWeight,
  setCurrentWeight,
  goalWeight,
  setGoalWeight,
  weekId,
}: AddWeightsProps) => {
  const [errorMessage, setErrorMessage] = useState(undefined)
  const storedToken = localStorage.getItem('authToken')

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`,
    },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.post(
        '/api/weights',
        { currentWeight, goalWeight, weekId },
        config
      )
      setCurrentWeight('')
      setGoalWeight('')
      setAddWeights(!addWeights)
    } catch (err: any) {
      const errorMsg = err.message
      setErrorMessage(errorMsg)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='startingWeight'>
        <Form.Label>Current Weight</Form.Label>
        <Form.Control
          type='text'
          value={currentWeight}
          onChange={(e) => setCurrentWeight(Number(e.target.value))}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId='goalWeight'>
        <Form.Label>Goal Weight</Form.Label>
        <Form.Control
          type='text'
          value={goalWeight}
          onChange={(e) => setGoalWeight(Number(e.target.value))}
        ></Form.Control>
      </Form.Group>
      <Button type='submit' className='mt-2' variant='dark'>
        Save
      </Button>
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
    </Form>
  )
}

export default AddWeights
