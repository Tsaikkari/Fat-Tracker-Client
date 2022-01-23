import React, { useState, useContext, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import styles from './Profile.module.css'
import { AuthContext } from '../../context/auth'
import Message from '../../components/Message'
import LifeStyle from '../../components/LifeStyle'

const Profile = () => {
  const { isLoading, isLoggedIn, user } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const token = localStorage.getItem('authToken')

  useEffect(() => {
    if (user) {
      axios
        .get(`/api/users/${user._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setName(response.data.payload.name)
          setEmail(response.data.payload.email)
        })
        .catch((err) => console.log(err))
    }
    //eslint-disable-next-line
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const updateUser = { email, name }

    axios
      .put(`/api/users/${user._id}`, updateUser, config)
      .then((res) => {
        console.log(res.data.payload)
      })
      .catch((err) => {
        const errorMsg = err.response.data.message
        setErrorMessage(errorMsg)
      })
  }

  //TODO:
  const handleChangePassword = () => {
    console.log('click')
  }

  return (
    <>
      {isLoggedIn && (
        <>
          <h1 className='text-center m-4'>Hello {user.name}!</h1>
          {/* TODO: instructions text */}
          <LifeStyle />
          <div className={styles.container}>
            <Form onSubmit={handleSubmit}>
              <h3>Update your information</h3>
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
              <Button type='submit' className='save-btn' variant=''>
                Update
              </Button>
              {errorMessage && (
                <Message variant='danger'>{errorMessage}</Message>
              )}
              {isLoading && <h3>Loading ...</h3>}
            </Form>

            <Form onSubmit={handleChangePassword}>
              <h3>Change Password</h3>
              <Form.Group controlId='Email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='Name'>
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter New Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button type='submit' className='save-btn' variant=''>
                Change Password
              </Button>
              {errorMessage && (
                <Message variant='danger'>{errorMessage}</Message>
              )}
              {isLoading && <h3>Loading ...</h3>}
            </Form>
          </div>
        </>
      )}
    </>
  )
}

export default Profile
