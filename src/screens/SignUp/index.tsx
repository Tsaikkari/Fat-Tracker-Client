import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'

import FormContainer from '../../components/FormContainer'
import Message from '../../components/Message'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)
  const [verifyEmailMsg, setVerifyEmailMsg] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const requestBody = { email, password, name }

    axios
      .post('/api/auth/signup', requestBody)
      .then((response) => {
        setVerifyEmailMsg(`A link to activate your account has been sent to ${email}. Check your spam folder.`)
        setEmail('')
        setName('')
        setPassword('')
      })
      .catch((err) => {
        const errorDescrition = err.message
        setErrorMessage(errorDescrition)
      })
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
        <Button type='submit' className='save-btn' variant=''>
          Sign Up
        </Button>
      </Form>
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
      {verifyEmailMsg && <Message variant='success'>{verifyEmailMsg}</Message>}
      <Row className='py-3'>
        <Col>
          Already have an account? <Link to={'/login'}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default SignUp
