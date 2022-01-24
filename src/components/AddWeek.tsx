import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import { config } from '../reqHeaders'
import Message from './Message'

// TODO: prop type

const AddWeek = ({ refreshWeeks }: any) => {
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')
  
  let navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!date) {
      setMessage('Missing Starting Date')
      setTimeout(() => {
        setMessage('')
      }, 2000)
    }
    if (config) {
      try {
        await axios.post('/api/weeks', { date }, config)
        setDate('')
        refreshWeeks()
        //navigate(`/weeks/${res.data.payload._id}`)
      } catch (err) {
        console.log(err)
      }
    }
  }
  
  return (
    <>
      {/* TODO: description */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='date'>
          <Form.Label>Starting Date</Form.Label>
          <Form.Control
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='danger' className='save-btn mb-3 mt-3'>Create Your Week</Button>
      </Form>
      {message !== '' && <Message variant='danger'>{message}</Message>}
    </>
  )
};

export default AddWeek;
