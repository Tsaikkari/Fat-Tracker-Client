import React from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

type EditWeightsProps = {
  refreshWeights: () => void
  editWeight: boolean
  setEditWeight: any
  achievedWeight: number | string
  setAchievedWeight: any
  weekId: string
  filteredWeights: any[]
}

const EditWeights = ({
  refreshWeights,
  editWeight,
  setEditWeight,
  achievedWeight,
  setAchievedWeight,
  weekId,
  filteredWeights
}: EditWeightsProps) => {
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
      refreshWeights()
      setAchievedWeight('')
      setEditWeight(!editWeight)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='achievedWeight'>
        <Form.Label>Update Current Weight</Form.Label>
        <Form.Control
          type='text'
          value={achievedWeight}
          onChange={(e) => setAchievedWeight(Number(e.target.value))}
        ></Form.Control>
      </Form.Group>
      <Button type='submit' className='mt-2' variant='dark'>
        Save
      </Button>
    </Form>
  )
}

export default EditWeights
