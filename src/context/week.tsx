import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { AuthContext } from './auth'

type ContextProps = {
  children: Element | any
}

const initialState = {
  weeks: [],
  errorMessage: undefined,
  getWeeks: () => {},
}

const WeekContext = React.createContext(initialState)

function WeekProviderWrapper(props: ContextProps) {
  const [weeks, setWeeks] = useState([])
  const [errorMessage, setErrorMessage] = useState(undefined)

  const { user } = useContext(AuthContext)

  const storedToken = localStorage.getItem('authToken')

  const getWeeks = async () => {
    if (user && storedToken) {
      try {
        const res = await axios.get('/api/weeks/user', {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        setWeeks(res.data.payload.reverse())
      } catch (err: any) {
        const errorMsg = err.message
        setErrorMessage(errorMsg)
      }
    }
  }

  useEffect(() => {
    getWeeks()

    //eslint-disable-next-line
  }, [])

  return (
    <WeekContext.Provider
      value={{
        weeks,
        getWeeks,
        errorMessage
      }}
    >
      {props.children}
    </WeekContext.Provider>
  )
}

export { WeekProviderWrapper, WeekContext }
