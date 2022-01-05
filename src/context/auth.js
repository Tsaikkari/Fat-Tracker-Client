import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const AuthContext = React.createContext()

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  const loginUser = (token) => {
    localStorage.setItem('authToken', token)
    verifyStoredToken()
    navigate('/profile')
  }

  const logoutUser = () => {
    localStorage.removeItem('authToken')
    setIsLoggedIn(false)
    setUser(null)
    navigate('/')
  }

  const verifyStoredToken = () => {
    const storedToken = localStorage.getItem('authToken')
    if (storedToken) {
      axios
        .get('api/auth/verify', {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const user = response.data.payload
          setUser(user)
          setIsLoggedIn(true)
          setIsLoading(false)
        })
        .catch((err) => {
          // the token is invalid
          setIsLoggedIn(false)
          setUser(null)
          setIsLoading(false)
        })
    } else {
      // token is not available
      setIsLoading(false)
    }
  }

  useEffect(() => {
    verifyStoredToken()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        isLoading,
        loginUser,
        logoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext }
