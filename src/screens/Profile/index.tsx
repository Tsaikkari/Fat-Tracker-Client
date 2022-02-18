import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Profile.module.css'
import Message from '../../components/Message'
import { AppState } from '../../redux/types'
import { updateUserRequest } from '../../redux/actions/auth'

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const auth = useSelector((state: AppState) => state.auth)
  const { _id, isLoggedIn, error, name, email } = auth

  const dispatch = useDispatch()

  // TODO: fix
  // useEffect(() => {
  //   if (_id !== '' && !formData.name) {
  //     setFormData((prevValue: any) => {
  //       return {
  //         ...prevValue,
  //         name,
  //         email,
  //       }
  //     })
  //     } else {
  //       setFormData((prevValue: any) => {
  //         return {
  //           ...prevValue,
  //           name: formData.name,
  //           email: formData.email,
  //         }
  //       })
  //   }
  // }, [dispatch, formData.name, formData.email, _id, name, email])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setFormData((prevValue: any) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setCredentials((prevValue: any) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const user = { _id, email: formData.email, name: formData.name }
    if (_id) {
      dispatch(
        updateUserRequest(user)
      )
    }
  }

  //TODO:
  const handleChangePassword = () => {
    dispatch({
      email: credentials.email,
      password: credentials.password,
    })
  }

  return (
    <>
      {isLoggedIn && (
        <>
          <div className={styles.container}>
            <Form onSubmit={handleSubmit}>
              <h3>Update your information</h3>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Name'
                  value={formData.name}
                  name='name'
                  onChange={handleChange}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                ></Form.Control>
              </Form.Group>
              <Button type='submit' className='save-btn' variant=''>
                Update
              </Button>
              {error && <Message variant='danger'>{error.message}</Message>}
            </Form>

            <Form onSubmit={handleChangePassword}>
              <h3>Change Password</h3>
              <Form.Group controlId='Email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Email'
                  name='email'
                  value={credentials.email}
                  onChange={handlePassword}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='Name'>
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter New Password'
                  name='passwore'
                  value={credentials.password}
                  onChange={handlePassword}
                  required
                ></Form.Control>
              </Form.Group>
              <Button type='submit' className='save-btn' variant=''>
                Change Password
              </Button>
              {error && <Message variant='danger'>{error.message}</Message>}
            </Form>
          </div>
        </>
      )}
    </>
  )
}

export default Profile
