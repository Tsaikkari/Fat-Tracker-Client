import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import { AuthContext } from '../context/auth'
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
    } catch (err) {
      console.log(err)
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
    </Form>
  )
}

export default AddFattyFoods
