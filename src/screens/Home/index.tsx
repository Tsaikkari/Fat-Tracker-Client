import React, { useState, useContext } from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'

import { AuthContext } from '../../context/auth'
import fatTracker from '../../images/fat-tracker.jpg'
import styles from './Home.module.css'
import Message from '../../components/Message'

const Home = () => {
  const [errorMessage, setErrorMessage] = useState(undefined)

  const { loginUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/signup')
  }

  const responseSuccessGoogle = (response: any) => {
    axios({
      method: 'POST',
      url: 'http://localhost:5000/api/auth/login/google',
      data: { idToken: response.tokenId },
    }).then((response) => {
      loginUser(response.data.payload.token)
    })
  }

  const responseFailureGoogle = (res: any) => {
    setErrorMessage(res.data.message)
  }
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${fatTracker})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right 25% bottom',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h1 className={styles.header}>Fat Tracker</h1>
      <div className={styles.buttons__div}>
        <div>
          <GoogleLogin
            clientId='49262481225-ntb03gjepdqs7ocerrm96g8iclg6pbm0.apps.googleusercontent.com'
            render={(renderProps) => (
              <Button onClick={renderProps.onClick}>Login With Google</Button>
            )}
            buttonText='Login with Google'
            onSuccess={responseSuccessGoogle}
            onFailure={responseFailureGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <b>or</b>
        <div className={styles.signup__div}>
          <Button
            className={styles.signup__div__btn}
            type='button'
            onClick={handleClick}
          >
            <div>
              <i className='fas fa-user-plus'></i> Sign Up
            </div>
          </Button>
        </div>
      </div>
      {errorMessage && <Message variant='danger'>{errorMessage}</Message>}
    </div>
  )
}

export default Home
