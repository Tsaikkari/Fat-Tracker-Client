import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import Message from './Message'
import { AppState } from '../redux/types'
import { createWeightRequest } from '../redux/actions/weight'
import { getUserWeightsRequest } from '../redux/actions/weights'

type AddWeightsProps = {
  addWeights: boolean
  setAddWeights: (arg0: boolean) => void
  weekId: string
}

const AddWeights = ({
  addWeights,
  setAddWeights,
  weekId,
}: AddWeightsProps) => {
  const [data, setData] = useState({
    currentWeight: '',
    goalWeight: '',
    weekId: ''
  })
  const { error, loading } = useSelector((state: AppState) => state.auth)

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

    if (weekId) {
      dispatch(createWeightRequest({
        currentWeight: Number(data.currentWeight),
        goalWeight: Number(data.goalWeight),
        weekId
      }))
      setData({
        currentWeight: '',
        goalWeight: '',
        weekId: ''
      })
      setAddWeights(!addWeights)
      //dispatch(getUserWeightsRequest())
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='startingWeight'>
        <Form.Label>Current Weight</Form.Label>
        <Form.Control
          type='text'
          name='currentWeight'
          value={data.currentWeight}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId='goalWeight'>
        <Form.Label>Goal Weight</Form.Label>
        <Form.Control
          type='text'
          name='goalWeight'
          value={data.goalWeight}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Button type='submit' className='mt-2' variant='dark'>
        Save
      </Button>
      {error && <Message variant='danger'>{error.message}</Message>}
      {loading && <p>... loading</p>}
    </Form>
  )
}

export default AddWeights
