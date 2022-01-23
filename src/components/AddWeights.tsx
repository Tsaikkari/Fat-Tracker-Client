import React from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import { config } from '../reqHeaders'

// TODO: props types

const AddWeights = ({ startingWeight, setStartingWeight, goalWeight, setGoalWeight }: any) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.post('/api/weights', { startingWeight, goalWeight }, config)
      setStartingWeight(0)
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
            type='number'
            value={startingWeight}
            onChange={(e) => setStartingWeight(Number(e.target.value))}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='goalWeight'>
          <Form.Label>Goal Weight</Form.Label>
          <Form.Control
            type='number'
            value={goalWeight}
            onChange={(e) => setGoalWeight(Number(e.target.value))}
          ></Form.Control>
        </Form.Group>
      </Form>
      <Button type='submit'>Save</Button>
    </>
  )
}

export default AddWeights
