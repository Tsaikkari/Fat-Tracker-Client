import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import Message from './Message'

type AddWeekProps = {
  refreshWeeks: () => void
  addWeek: boolean
  setAddWeek: (arg0: boolean) => void
}

const AddWeek = ({ refreshWeeks, addWeek, setAddWeek }: AddWeekProps) => {
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const storedToken = localStorage.getItem('authToken')

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`,
    },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!date) {
      setMessage('Missing Starting Date')
      setTimeout(() => {
        setMessage('')
      }, 2000)
    }
    try {
      await axios.post('/api/weeks', { date }, config)
      setDate('')
      refreshWeeks()
      setAddWeek(!addWeek)
    } catch (err: any) {
      const errorMsg = err.message
      setErrorMessage(errorMsg)
    }
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
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
    </div>
  )
}

export default AddWeek
