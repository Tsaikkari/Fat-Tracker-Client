import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

type AddSportsProps = {
  refreshSports: () => void
  weekId: string
  addSports: boolean
  setAddSports: (arg0: boolean) => void
  sport: string
  setSport: any
  date: string
  setDate: any
  duration: number | string
  setDuration: any
  day: string
}

const AddSports = ({
  refreshSports,
  weekId,
  addSports,
  setAddSports,
  sport,
  setSport,
  date,
  setDate,
  duration,
  setDuration,
  day
}: AddSportsProps) => {
  useEffect(() => {
    if (day) {
      setDate(day)
    }
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
      await axios.post(
        '/api/sports',
        { sport, date, duration, weekId },
        config
      )
      refreshSports()
      setSport('')
      setDate('')
      setDuration('')
      setAddSports(!addSports)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='sport'>
          <Form.Label>Sport</Form.Label>
          <Form.Control
            type='text'
            placeholder='Separate sports with a comma'
            value={sport}
            onChange={(e) => setSport(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='duration'>
          <Form.Label>Duration</Form.Label>
          <Form.Control
            type='text'
            placeholder='Approximate time in minutes'
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' className='mt-2' variant='dark'>
          Save
        </Button>
      </Form>
    </>
  )
}

export default AddSports
