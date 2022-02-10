import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Row, Col, Button } from 'react-bootstrap'

import FormContainer from '../../components/FormContainer'
import Message from '../../components/Message'
import { signupUserRequest } from '../../redux/actions/auth'
import { AppState } from '../../redux/types'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [verifyEmailMsg, setVerifyEmailMsg] = useState('')

  const error = useSelector((state: AppState) => state.auth.error)

  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(signupUserRequest({ name, email, password }))
    setVerifyEmailMsg(`A link to activate your account has been sent to ${email}. 
    Check your spam folder.`)
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
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
          Sign Up
        </Button>
      </Form>
      {error && <Message variant='danger'>{error.message}</Message>}
      {verifyEmailMsg && <Message variant='success'>{verifyEmailMsg}</Message>}
      <Row>
        <Col>
          Already have an account? <Link to={'/login'}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default SignUp
