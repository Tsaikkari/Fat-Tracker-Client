import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import Message from './Message'
import { AppState } from '../redux/types'
import { createFattyFoodRequest } from '../redux/actions/fattyFood'
import { getUserFattyFoodsRequest } from '../redux/actions/fattyFoods'

type AddFattyFoodsProps = {
  weekId: string
  addFattyFoods: boolean
  setAddFattyFoods: (arg0: boolean) => void
  day: string
}

const AddFattyFoods = ({
  weekId,
  addFattyFoods,
  setAddFattyFoods,
  day,
}: AddFattyFoodsProps) => {
  const [data, setData] = useState({
    name: '',
    chosenDate: '',
    weekId: '',
  })
  const [chosenDate, setChosenDate] = useState('')
  const { error, loading } = useSelector((state: AppState) => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    if (day) {
      setChosenDate(day)
    }
    //eslint-disable-next-line
  }, [])

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
      dispatch(createFattyFoodRequest({
        name: data.name,
        chosenDate,
        weekId: weekId
      }))
      setData({
        name: '',
        chosenDate: '',
        weekId: ''
      })
      setChosenDate('')
      setAddFattyFoods(!addFattyFoods)
      dispatch(getUserFattyFoodsRequest())
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='fattyFoodName'>
        <Form.Label>Fatty Food</Form.Label>
        <Form.Control
          type='text'
          placeholder='Separate fatty foods with a comma'
          name='name'
          value={data.name}
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

export default AddFattyFoods
