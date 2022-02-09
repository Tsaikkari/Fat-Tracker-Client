import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import Message from './Message'
import { AuthContext } from '../context/auth'

type LifeStyleProps = {
  lifeStyles: string
  setLifeStyles: any
}

const AddLifeStyles = ({ lifeStyles, setLifeStyles }: LifeStyleProps) => {
  const [errorMessage, setErrorMessage] = useState(undefined)

  const { user } = useContext(AuthContext)

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
      await axios.put( `/api/users/${user._id}`, { lifeStyles }, config)
      setLifeStyles('')
    } catch (err: any) {
      const errorMsg = err.message
      setErrorMessage(errorMsg)
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='lifeStyles'>
        <Form.Control
          type='text'
          placeholder='Separate life styles with a comma'
          value={lifeStyles}
          onChange={(e) => setLifeStyles(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button type='submit' className='mt-2' variant='dark'>
        Save
      </Button>
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
    </Form>
  )
}

export default AddLifeStyles
