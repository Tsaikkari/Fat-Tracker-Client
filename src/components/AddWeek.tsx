import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from './Message'
import { AppState } from '../redux/types'
import { createWeekRequest } from '../redux/actions/week'

type AddWeekProps = {
  addWeek: boolean
  setAddWeek: (arg0: boolean) => void
}

const AddWeek = ({ addWeek, setAddWeek }: AddWeekProps) => {
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')

  const { error, loading } = useSelector((state: AppState) => state.auth)

  const dispatch = useDispatch()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!date) {
      setMessage('Missing Starting Date')
      setTimeout(() => {
        setMessage('')
      }, 3000)
    }
    dispatch(createWeekRequest({ date }))
      setDate('')
      setAddWeek(!addWeek)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='date'>
          <Form.Label>Starting Date</Form.Label>
          <Form.Control
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='danger' className='save-btn create-week-btn mb-3 mt-3'>
          Create Your Week
        </Button>
      </Form>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error.message}</Message>}
    </div>
  )
}

export default AddWeek
