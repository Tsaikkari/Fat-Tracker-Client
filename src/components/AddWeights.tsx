import React from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import { config } from '../reqHeaders'

// TODO: props types

const AddWeights = ({
  addWeights,
  setAddWeights,
  refreshWeights,
  currentWeight,
  setCurrentWeight,
  goalWeight, 
  setGoalWeight,
  weekId
}: any) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.post('/api/weights', { currentWeight, goalWeight, weekId }, config)
      refreshWeights()
      setCurrentWeight(0)
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
        <Button type='submit' variant='dark'>Save</Button>
      </Form>
    </>
  )
}

export default AddWeights
