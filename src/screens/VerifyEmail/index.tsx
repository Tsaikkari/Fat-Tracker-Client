import React, { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import Message from '../../components/Message'
import FormContainer from '../../components/FormContainer'
import { AuthContext } from '../../context/auth'

const VerifyEmail = () => {
  const [errorMessage, setErrorMessage] = useState(undefined)

  const { token } = useParams()
  const navigate = useNavigate()

  const { isLoading } = useContext(AuthContext)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    axios
      .post('/api/auth/email-activate', { token })
      .then((res) => {
        navigate('/login')
      })
      .catch((err) => {
        const errorMsg = err.response.data.message
        setErrorMessage(errorMsg)
      })
  }

  return (
    <FormContainer>
      <h1 className='mb-4 text-center'>Activate Your Account</h1>
      <Form onSubmit={handleSubmit}>
        <Button type='submit' className='save-btn' variant=''>
          Verify Email
        </Button>
      </Form>
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
      {isLoading && <h3>Loading ...</h3>}
    </FormContainer>
  )
}

export default VerifyEmail
