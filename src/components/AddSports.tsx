import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import Message from './Message'
import { AppState } from '../redux/types'
import { createSportRequest } from '../redux/actions/sport'
import { getUserSportsRequest } from '../redux/actions/sports'

type AddSportsProps = {
  weekId: string
  addSports: boolean
  setAddSports: (arg0: boolean) => void
  day: string
}

const AddSports = ({
  weekId,
  addSports,
  setAddSports,
  day,
}: AddSportsProps) => {
  const [data, setData] = useState({
    sport: '',
    date: '',
    duration: '',
    weekId: ''
  })
  const [date, setDate] = useState('')
  const { error, loading } = useSelector((state: AppState) => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    if (day) {
      setDate(day)
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
      dispatch(createSportRequest({
        sport: data.sport,
        date,
        duration: Number(data.duration),
        weekId: weekId
      }))
      setData({
        sport: '',
        date: '',
        duration: '',
        weekId: ''
      })
      setDate('')
      setAddSports(!addSports)
      dispatch(getUserSportsRequest())
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='sport'>
        <Form.Label>Sport</Form.Label>
        <Form.Control
          type='text'
          placeholder='Separate sports with a comma'
          name='sport'
          value={data.sport}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId='duration'>
        <Form.Label>Duration</Form.Label>
        <Form.Control
          type='text'
          placeholder='Approximate time in minutes'
          name='duration'
          value={data.duration}
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

export default AddSports
