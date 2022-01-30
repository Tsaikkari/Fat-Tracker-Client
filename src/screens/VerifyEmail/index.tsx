import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import FormContainer from '../../components/FormContainer'

const VerifyEmail = () => {
  const { token } = useParams()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    axios
      .post('/api/auth/email-activate', { token })
      .then((res) => {
        navigate('/login')
      })
      .catch((err) => {
        console.log(err)
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
    </FormContainer>
  )
}

export default VerifyEmail
