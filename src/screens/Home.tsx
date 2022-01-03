import React, { useContext } from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios'

import { AuthContext } from '../context/auth'
import fatTracker from '../images/fat-tracker.jpg'

const Home = () => {
  const { loginUser } = useContext(AuthContext)

  const handleClick = () => {
    console.log('click')
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
      className='home-container'
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
      <div className='home-header-div'>
        <h1>Fat Tracker</h1>
      </div>

      <div className='home-buttons-div'>
      <div className='google-login-div'>
        <GoogleLogin
          clientId='49262481225-ntb03gjepdqs7ocerrm96g8iclg6pbm0.apps.googleusercontent.com'
          buttonText='Login with Google'
          onSuccess={responseSuccessGoogle}
          onFailure={responseFailureGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>

      <div className='signup-div'>
        <button
          className='signup-btn'
          type='button'
          onClick={handleClick}
        >
          <div className='signup-icon-div'>
          <i className='fas fa-user-plus'></i> Sign Up
          </div>
        </button>
      </div>
      </div>
    </div>
  )
}

export default Home
