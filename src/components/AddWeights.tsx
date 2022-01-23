import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import { config } from '../reqHeaders'

// TODO: props types

const AddWeights = ({
  addWeights,
  setAddWeights,
  refreshWeights,
  weekId
}: any) => {
  const [startingWeight, setStartingWeight] = useState(0)
  const [goalWeight, setGoalWeight] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('click')

    try {
      await axios.post('/api/weights', { startingWeight, goalWeight, weekId }, config)
      refreshWeights()
      setStartingWeight(0)
      setGoalWeight(0)
      setAddWeights(!addWeights)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='startingWeight'>
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type='text'
            value={startingWeight}
            onChange={(e) => setStartingWeight(Number(e.target.value))}
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
        <Button type='submit'>Save</Button>
      </Form>
    </>
  )
}

export default AddWeights
