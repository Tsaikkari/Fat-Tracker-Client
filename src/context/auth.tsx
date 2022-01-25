import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

type ContextProps = {
  children: Element | any
}

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: {
    _id: '',
    name: '',
    email: '',
  },
  loginUser: (token: string) => {},
  logoutUser: () => {},
}

const AuthContext = React.createContext(initialState)

function AuthProviderWrapper(props: ContextProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({ name: '', _id: '', email: '' })
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  const loginUser = (token: string) => {
    localStorage.setItem('authToken', token)
    verifyStoredToken()
    navigate('/profile')
  }

  const logoutUser = () => {
    localStorage.removeItem('authToken')
    setIsLoggedIn(false)
    setUser({ name: '', _id: '', email: '' })
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
          setUser({ name: '', _id: '', email: '' })
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
