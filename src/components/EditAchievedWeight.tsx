import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import Message from './Message'
import { AppState } from '../redux/types'
import { updateWeekRequest } from '../redux/actions/week'

type EditAchievedWeightProps = {
  editWeight: boolean
  setEditWeight: (arg0: boolean) => void
}

const EditAchievedWeight = ({
  editWeight,
  setEditWeight,
}: EditAchievedWeightProps) => {
  const [data, setData] = useState({
    weights: {
      currentWeight: '',
      goalWeight: '',
      achievedWeight: '',
    },
  })
  const { error } = useSelector((state: AppState) => state.auth)

  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setData((prevValue: any) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(
      updateWeekRequest({
        weights: {
          currentWeight: Number(data.weights.currentWeight),
          goalWeight: Number(data.weights.goalWeight),
          achievedWeight: Number(data.weights.achievedWeight),
        },
      })
    )
    setData({
      weights: {
        currentWeight: '',
        goalWeight: '',
        achievedWeight: '',
      },
    })
    setEditWeight(!editWeight)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='achievedWeight'>
        <Form.Label>Current Weight</Form.Label>
        <Form.Control
          type='text'
          value={data.weights.achievedWeight}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Button type='submit' className='mt-2' variant='dark'>
        Save
      </Button>
      {error && <Message variant='danger'>{error.message}</Message>}
    </Form>
  )
}

export default EditAchievedWeight
