import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import Message from './Message'
import { AppState } from '../redux/types'
import { updateWeekRequest } from '../redux/actions/week'

type AddAchievedWeightProps = {
  editWeight: boolean
  setEditWeight: (arg0: boolean) => void
  weekId: string
}

const AddAchievedWeight = ({
  editWeight,
  setEditWeight,
  weekId
}: AddAchievedWeightProps) => {
  const [achievedWeight, setAchievedWeight] = useState('')
  const { error } = useSelector((state: AppState) => state.week)

  const dispatch = useDispatch()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(
      updateWeekRequest({ weekId, achievedWeight: Number(achievedWeight) })
    )
    setAchievedWeight('')
    setEditWeight(!editWeight)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='achievedWeight'>
        <Form.Label>Current Weight</Form.Label>
        <Form.Control
          type='text'
          name='achievedWeight'
          value={achievedWeight}
          onChange={(e) => setAchievedWeight(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button type='submit' className='mt-2' variant='dark'>
        Save
      </Button>
      {error && <Message variant='danger'>{error.message}</Message>}
    </Form>
  )
}

export default AddAchievedWeight
