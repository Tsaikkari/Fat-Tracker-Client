import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import Message from './Message'
import { AppState } from '../redux/types'
import { updateWeekRequest } from '../redux/actions/week'

type EditAchievedWeightProps = {
  editWeight: boolean
  setEditWeight: (arg0: boolean) => void
  weekId: string
}

const EditAchievedWeight = ({
  editWeight,
  setEditWeight,
  weekId
}: EditAchievedWeightProps) => {
  const [data, setData] = useState({
    currentWeight: '',
    goalWeight: '',
    achievedWeight: '',
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
          currentWeight: Number(data.currentWeight),
          goalWeight: Number(data.goalWeight),
          achievedWeight: Number(data.achievedWeight),
        },
        weekId
      })
    )
    setData({
      currentWeight: '',
      goalWeight: '',
      achievedWeight: '',
    })
    setEditWeight(!editWeight)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='achievedWeight'>
        <Form.Label>Current Weight</Form.Label>
        <Form.Control
          type='text'
          value={data.achievedWeight}
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
