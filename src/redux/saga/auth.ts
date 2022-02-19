import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import LocalStorage from '../../local-storage'
import {
  signupUserSuccess,
  signupUserFail,
  googleLoginSuccess,
  googleLoginFail,
  loginUserSuccess,
  loginUserFail,
  setLoggedIn,
  getUserProfileSuccess,
  getUserProfileFail,
  updateUserSuccess,
  updateUserFail,
  deleteUserSuccess,
  deleteUserFail,
} from '../actions/auth'
import { 
  SignupRequestAction, 
  GoogleLoginRequestAction,
  LoginRequestAction,
  GetUserProfileRequestAction,
  UpdateUserRequestAction,
  DeleteUserRequestAction,
} from '../actions/types'

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

function* googleLoginSaga(action: GoogleLoginRequestAction) {
  const { idToken } = action.payload.googleLogin
  const navigate = action.payload.navigate

  try {
    //@ts-ignore
    const res = yield axios.post('auth/login/google', { idToken })

    if (res.data.status === 200) {
      yield put(googleLoginSuccess(res.data.payload.userInfo))
      yield LocalStorage.saveToken(res.data.payload.token)
      yield put(setLoggedIn())
      navigate('/about')
    }
  } catch (err: any) {
    yield put(googleLoginFail(err.message))
    yield put(getUserProfileFail(err.message))
  }
}

function* loginUserSaga(action: LoginRequestAction) {
  const { email, password } = action.payload.loginForm
  const navigate = action.payload.navigate

  try {
    //@ts-ignore
    const res = yield axios.post('auth/login', {
      email,
      password,
    })

    if (res.data.status === 200) {
      yield put(loginUserSuccess(res.data.payload.userInfo))
      yield LocalStorage.saveToken(res.data.payload.token)
      yield put(setLoggedIn())
      yield put({ type: 'GET_USER_PROFILE_REQUEST' })
      navigate('/about')
    }
  } catch (error: any) {
    yield put(loginUserFail(error.message))
  }
}

function* getUserProfileSaga(action: GetUserProfileRequestAction) {
  const userId = action.payload
  try {
    //@ts-ignore
    const res = yield axios.get(`users/${userId}`)
    yield put(getUserProfileSuccess(res.data.payload))
  } catch (error: any) {
    yield put(getUserProfileFail(error.message))
  }
}

function* updateUserSaga(action: UpdateUserRequestAction) {
  const { name, email } = action.payload
  const userId = action.payload._id

  try {
    //@ts-ignore
    const res = yield axios.patch(`users/${userId}`, { name, email })
    yield put(updateUserSuccess(res.data.payload))
  } catch (err: any) {
    yield put(updateUserFail(err.message))
  }
}

function* updateLifeStyleSaga(action: UpdateUserRequestAction) {
  const userId = action.payload._id
  const lifeStyles = action.payload.lifeStyles
  try {
    //@ts-ignore
    const res = yield axios.patch(`users/${userId}`, { lifeStyles })
    yield put(updateUserSuccess(res.data.payload))
  } catch (err: any) {
    yield put(updateUserFail(err.message))
  }
}

function* deleteUserSaga(action: DeleteUserRequestAction) {
  const userId = action.payload._id
  try {
    //@ts-ignore
    const res = yield axios.delete(`users/${userId}`)
    if (res.status === 200) {
      yield put(deleteUserSuccess())
    }
  } catch (error: any) {
    yield put(deleteUserFail(error.message))
  }
}

const sagaWatcher = [
  takeLatest('SIGNUP_USER_REQUEST', signupUserSaga),
  takeLatest('GOOGLE_LOGIN_REQUEST', googleLoginSaga),
  takeLatest('LOGIN_USER_REQUEST', loginUserSaga),
  takeLatest('GET_USER_PROFILE_REQUEST', getUserProfileSaga),
  takeLatest('UPDATE_USER_REQUEST', updateUserSaga),
  takeLatest('UPDATE_USER_REQUEST', updateLifeStyleSaga),
  takeLatest('DELETE_USER_REQUEST', deleteUserSaga),
]

export default sagaWatcher
