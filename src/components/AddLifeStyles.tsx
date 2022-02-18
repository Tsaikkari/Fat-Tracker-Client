import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from './Message'
import { AppState } from '../redux/types'
import { updateUserRequest } from '../redux/actions/auth'

const AddLifeStyles = () => {
  const [lifeStyles, setLifeStyles] = useState('')

  const {_id, error } = useSelector((state: AppState) => state.auth)

  const dispatch = useDispatch()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(
      updateUserRequest({ _id, lifeStyles })
    )
    setLifeStyles('')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='lifeStyles'>
        <Form.Control
          type='text'
          placeholder='Separate life styles with a comma'
          value={lifeStyles}
          name='lifeStyles'
          onChange={(e) => setLifeStyles(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button type='submit' className='mt-2' variant='dark'>
        Save
      </Button>
      {error && <Message variant='danger'>{error.message}</Message>}
    </Form>
  )
}

export default AddLifeStyles
