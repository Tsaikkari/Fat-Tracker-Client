import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { AuthContext } from './auth'

type ContextProps = {
  children: Element | any
}

const initialState = {
  weights: [],
  errorMessage: undefined,
  getWeights: () => {},
}

const WeightContext = React.createContext(initialState)

function WeightProviderWrapper(props: ContextProps) {
  const [weights, setWeights] = useState([])
  const [errorMessage, setErrorMessage] = useState(undefined)

  const { user } = useContext(AuthContext)

  const storedToken = localStorage.getItem('authToken')

  const getWeights = async () => {
    if (user && storedToken) {
      try {
        const res = await axios.get('/api/weights/user', {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        setWeights(res.data.payload)
      } catch (err: any) {
        const errorMsg = err.message
        setErrorMessage(errorMsg)
      }
    }
  }

  useEffect(() => {
    getWeights()

    //eslint-disable-next-line
  }, [])

  return (
    <WeightContext.Provider
      value={{
        weights,
        getWeights,
        errorMessage,
      }}
    >
      {props.children}
    </WeightContext.Provider>
  )
}

export { WeightProviderWrapper, WeightContext }
