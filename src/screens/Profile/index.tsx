import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Profile.module.css'
import Message from '../../components/Message'
import LifeStyles from '../../components/LifeStyles'
import AddLifeStyles from '../../components/AddLifeStyles'
import { AppState } from '../../redux/types'
import { updateUserRequest } from '../../redux/actions/user'
import { getUserProfileRequest } from '../../redux/actions'

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    lifeStyles: '',
  })
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const { error, loading, isLoggedIn, userInfo } = useSelector(
    (state: AppState) => state.auth
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    } else {
      if (!userInfo.name && userInfo._id !== '') {
        dispatch(getUserProfileRequest(userInfo._id))
      } else {
        setFormData((prevValue: any) => {
          return {
            ...prevValue,
            name: userInfo.name,
            email: userInfo.email,
            lifeStyles: userInfo.lifeStyles,
          }
        })
      }
    }
  }, [
    dispatch,
    userInfo.name,
    userInfo.email,
    userInfo.lifeStyles,
    userInfo._id,
    isLoggedIn,
    navigate,
  ])

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
    dispatch(
      updateUserRequest({
        email: formData.email,
        name: formData.name,
        lifeStyles: formData.lifeStyles,
      })
    )
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
          <h1 className='text-center m-4'>Hello {userInfo.name} 🧡</h1>
          <section>
            {/* {weeks.length === 0 &&  */}
            <p>
              Create your week plan(s) at the <span>Week</span> page. But first,
              you might want to specify the life style changes that you are
              taking on:
            </p>
            {/* }  */}
            <LifeStyles lifeStyles={userInfo.lifeStyles} />
            <AddLifeStyles />
          </section>
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
                ></Form.Control>
              </Form.Group>
              <Button type='submit' className='save-btn' variant=''>
                Update
              </Button>
              {error && <Message variant='danger'>{error.message}</Message>}
              {loading && <h3>Loading ...</h3>}
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
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='Name'>
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter New Password'
                  value={credentials.password}
                  onChange={handlePassword}
                ></Form.Control>
              </Form.Group>
              <Button type='submit' className='save-btn' variant=''>
                Change Password
              </Button>
              {error && <Message variant='danger'>{error.message}</Message>}
              {loading && <h3>Loading ...</h3>}
            </Form>
          </div>
        </>
      )}
    </>
  )
}

export default Profile
