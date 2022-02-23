import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import Message from './Message'
import { AppState } from '../redux/types'
import { updateWeekRequest } from '../redux/actions/week'
import { getUserWeeksRequest } from '../redux/actions/weeks'

type AddWeightsProps = {
  addWeights: boolean
  setAddWeights: (arg0: boolean) => void
  weekId: string
}

const AddWeights = ({ addWeights, setAddWeights, weekId }: AddWeightsProps) => {
  const [weightsItem, setWeightsItem] = useState({
    currentWeight: '',
    goalWeight: ''
  })
  const { error, loading } = useSelector((state: AppState) => state.auth)

  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setWeightsItem((prevValue: any) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const weights = {
      currentWeight: Number(weightsItem.currentWeight),
      goalWeight: Number(weightsItem.goalWeight)
    }

    dispatch(
      updateWeekRequest({
        weights,
        weekId,
      })
    )
    setWeightsItem({
      currentWeight: '',
      goalWeight: '',
    })
    setAddWeights(!addWeights)
    setTimeout(() => {
      dispatch(getUserWeeksRequest())
    }, 500)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='startingWeight'>
        <Form.Label>Current Weight</Form.Label>
        <Form.Control
          type='text'
          name='currentWeight'
          value={weightsItem.currentWeight}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId='goalWeight'>
        <Form.Label>Goal Weight</Form.Label>
        <Form.Control
          type='text'
          name='goalWeight'
          value={weightsItem.goalWeight}
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
