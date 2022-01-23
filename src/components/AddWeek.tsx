import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import { config } from '../reqHeaders'

// TODO: prop type

const AddWeek = ({ refreshWeeks }: any) => {
  const [date, setDate] = useState('')
  
  let navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (config) {
      try {
        const res = await axios.post('/api/weeks', { date }, config)
        setDate('')
        refreshWeeks()
        navigate(`/weeks/${res.data.payload._id}`)
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
        <Button type='submit' className='save-btn'>Create Your Week</Button>
      </Form>
    </>
  )
};

export default AddWeek;
