import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import Message from './Message'

type AddFattyFoodsProps = {
  refreshFattyFoods: () => void
  weekId: string
  addFattyFoods: boolean
  setAddFattyFoods: (arg0: boolean) => void
  name: string
  setName: any
  chosenDate: string
  setChosenDate: any
  day: string
}

const AddFattyFoods = ({
  refreshFattyFoods,
  weekId,
  addFattyFoods,
  setAddFattyFoods,
  name,
  setName,
  chosenDate,
  setChosenDate,
  day,
}: AddFattyFoodsProps) => {
  const [errorMessage, setErrorMessage] = useState(undefined)

  useEffect(() => {
    if (day) {
      setChosenDate(day)
    }
    //eslint-disable-next-line
  }, [])

  const storedToken = localStorage.getItem('authToken')

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}`,
    },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.post('/api/fattyFoods', { name, chosenDate, weekId }, config)
      refreshFattyFoods()
      setName('')
      setChosenDate('')
      setAddFattyFoods(!addFattyFoods)
    } catch (err: any) {
      const errorMsg = err.message
      setErrorMessage(errorMsg)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='fattyFoodName'>
        <Form.Label>Fatty Food</Form.Label>
        <Form.Control
          type='text'
          placeholder='Separate fatty foods with a comma'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button type='submit' className='mt-2' variant='dark'>
        Save
      </Button>
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
    </Form>
  )
}

export default AddFattyFoods
