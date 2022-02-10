import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import Message from './Message'

type EditWeightsProps = {
  editWeight: boolean
  setEditWeight: (arg0: boolean) => void
  achievedWeight: number | string
  setAchievedWeight: any
  weekId: string
  filteredWeights: any[]
}

const EditWeights = ({
  editWeight,
  setEditWeight,
  achievedWeight,
  setAchievedWeight,
  weekId,
  filteredWeights,
}: EditWeightsProps) => {
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

    let weightId
    if (filteredWeights[0]._id) {
      weightId = filteredWeights[0]._id
    }

    try {
      await axios.put(
        `/api/weights/${weightId}`,
        { achievedWeight, weekId },
        config
      )
      setAchievedWeight('')
      setEditWeight(!editWeight)
    } catch (err: any) {
      const errorMsg = err.message
      setErrorMessage(errorMsg)
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='achievedWeight'>
        <Form.Label>Current Weight</Form.Label>
        <Form.Control
          type='text'
          value={achievedWeight}
          onChange={(e) => setAchievedWeight(Number(e.target.value))}
        ></Form.Control>
      </Form.Group>
      <Button type='submit' className='mt-2' variant='dark'>
        Save
      </Button>
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
    </Form>
  )
}

export default EditWeights
