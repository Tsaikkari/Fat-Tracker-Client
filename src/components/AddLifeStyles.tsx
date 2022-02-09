import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from './Message'
import { AppState } from '../redux/types'

const AddLifeStyles = () => {
  const [lifeStyles, setLifeStyles] = useState('')

  const { error, loading, isLoggedIn, userInfo } = useSelector((state: AppState) => state.auth)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // try {
    //   await axios.put( `/api/users/${user._id}`, { lifeStyles }, config)
    //   setLifeStyles('')
    // } catch (err: any) {
    //   const errorMsg = err.message
    //   setErrorMessage(errorMsg)
    // }
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
      {error && <Message variant='danger'>{error.message}</Message>}
    </Form>
  )
}

export default AddLifeStyles
