import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import LocalStorage from '../../local-storage'

import {
  signupUserSuccess,
  signupUserFail,
  loginUserSuccess,
  loginUserFail,
  setLoggedIn,
} from '../actions/auth'
import { SignupRequestAction, LoginRequestAction } from '../actions/types'

function* signupUserSaga(action: SignupRequestAction) {
  const { name, email, password } = action.payload
  try {
    //@ts-ignore
    yield axios.post('auth/signup', { name, email, password })
    yield put(signupUserSuccess())
  } catch (err) {
    yield put(signupUserFail(err))
  }
}

function* loginUserSaga(action: LoginRequestAction) {
  const { email, password } = action.payload

  try {
    //@ts-ignore
    const res = yield axios.post('auth/login', {
      email,
      password,
    })

    // TODO: redirect to profile page
    if (res.data.status === 200) {
      yield put(loginUserSuccess(res.data.payload))
      yield LocalStorage.saveToken(res.data.payload.token)
      yield put(setLoggedIn())
    }
  } catch (error) {
    yield put(loginUserFail(error))
  }
}

const sagaWatcher = [
  takeLatest('SIGNUP_USER_REQUEST', signupUserSaga),
  takeLatest('LOGIN_USER_REQUEST', loginUserSaga),
]

export default sagaWatcher
