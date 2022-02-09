import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Message from '../../components/Message'
import FormContainer from '../../components/FormContainer'
import { AppState } from '../../redux/types'
import { loginUserRequest } from '../../redux/actions'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { error, loading, isLoggedIn } = useSelector((state: AppState) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(loginUserRequest({ email, password }))
    setEmail('')
    setPassword('')
    navigate('/profile')
    console.log(isLoggedIn, 'ISLI')
  }

  return (
    <FormContainer>
      <h1 className='mb-4'>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' className='save-btn' variant='danger'>
          Login
        </Button>
      </Form>
      {error && <Message variant='danger'>{error.message}</Message>}
      {loading && <h3>Loading ...</h3>}
      <Row>
        <Col>
          Don't have an account? <Link to={'/signup'}>Sign Up</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default Login
