import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  getUserProfileSuccess,
  getUserProfileFail,
  updateUserSuccess,
  updateUserFail,
  deleteUserSuccess,
  deleteUserFail
} from '../actions/user'
import { GetUserProfileRequestAction, UpdateUserRequestAction, DeleteUserRequestAction } from '../actions/types'

function* getUserProfileSaga(action: GetUserProfileRequestAction) {
  const userId = action.payload._id
  try {
    //@ts-ignore
    const res = yield axios.get(`users/${userId}`)
    yield put(getUserProfileSuccess(res.data.payload))
  } catch (error) {
    yield put(getUserProfileFail(error))
  }
}

function* updateUserSaga(action: UpdateUserRequestAction) {
  const userInfo = action.payload
  try {
    //@ts-ignore
    const res = yield axios.patch(`/${url}/users/${userInfo._id}`, userInfo)
    yield put(updateUserSuccess(res.data.payload))
  } catch (err) {
    yield put(updateUserFail(err))
  }
}

function* deleteUserSaga(action: DeleteUserRequestAction) {
  const userId = action.payload
  try {
    //@ts-ignore
    const res = yield axios.delete(`/${url}/users/${userId}`)
    if (res.status === 200) {
      yield put(deleteUserSuccess())
    }
  } catch (error) {
    yield put(deleteUserFail(error))
  }
}

const sagaWatcher = [
  takeLatest('GET_USER_PROFILE_REQUEST', getUserProfileSaga),
  takeLatest('UPDATE_USER_REQUEST', updateUserSaga),
  takeLatest('DELETE_USER_REQUEST', deleteUserSaga)
]

export default sagaWatcher
