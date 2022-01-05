import React, { useContext } from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { AuthContext } from '../../context/auth'
import fatTracker from '../../images/fat-tracker.jpg'
import styles from './Home.module.css'

const Home = () => {
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
      console.log('response', response)
      loginUser(response.data.payload.token)
    })
  }

  const responseFailureGoogle = (res: any) => {
    console.log('error')
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
          {/* TODO: custom button? */}
          <GoogleLogin
            clientId='49262481225-ntb03gjepdqs7ocerrm96g8iclg6pbm0.apps.googleusercontent.com'
            buttonText='Login with Google'
            onSuccess={responseSuccessGoogle}
            onFailure={responseFailureGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <b>or</b>
        <div className={styles.signup__div}>
          <button
            className={styles.signup__div__btn}
            type='button'
            onClick={handleClick}
          >
            <div>
              <i className='fas fa-user-plus'></i> Sign Up
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
