import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  createWeekSuccess,
  createWeekFail,
  updateWeekSuccess,
  updateWeekFail
} from '../actions/week'
import { CreateWeekRequestAction, UpdateWeekRequestAction } from '../actions/types'

function* createWeekSaga(action: CreateWeekRequestAction) {
  const { week } = action.payload
  try {
    //@ts-ignore
    const res = yield axios.post('weeks', week)
    console.log(res.data.payload, 'payload')
    yield put(createWeekSuccess(res.data.payload))
    yield localStorage.setItem('week', res.data.payload)
  } catch (err) {
    yield put(createWeekFail(err))
  }
}

function* updateWeekSaga(action: UpdateWeekRequestAction) {
  try {
    //@ts-ignore
    const res = yield axios.put(`weeks/${action.payload.weekId}`, action.payload.weights)
    yield put(updateWeekSuccess(res.data.payload))
  } catch (err) {
    yield put(updateWeekFail(err))
  }
}

const weekWatcher = [
  takeLatest('CREATE_WEEK_REQUEST', createWeekSaga),
  takeLatest('UPDATE_WEEK_REQUEST', updateWeekSaga)
]

export default weekWatcher
