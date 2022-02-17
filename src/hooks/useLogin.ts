import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { logoutUser, loginUserSuccess, setLoggedIn } from '../redux/actions/auth'

// TODO: should stay on profile page when refresh
// TODO: should logout without refresh

const useLogin = () => {
  const dispatch = useDispatch()

  const getUser = async () => {
    const res = await axios.get(`auth/verify`)
    const status = res.data.status

    if (status === 401) {
      dispatch(logoutUser())
    }
    dispatch(loginUserSuccess(res.data.payload))
    dispatch(setLoggedIn())
  }

  useEffect(() => {
    getUser()
  })
}

export default useLogin