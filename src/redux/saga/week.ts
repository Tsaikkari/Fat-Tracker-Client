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
    yield put(createWeekSuccess(res.data.payload))
    yield localStorage.setItem('week', res.data.payload)
  } catch (err) {
    yield put(createWeekFail(err))
  }
}

function* updateWeekSaga(action: UpdateWeekRequestAction) {
  try {
    //@ts-ignore
    const res = yield axios.put(`weeks/${action.payload.weekId}`)
    yield put(updateWeekSuccess(res.data.payload.weights))
  } catch (err) {
    yield put(updateWeekFail(err))
  }
}

function* updateAchievedWeightSaga(action: UpdateWeekRequestAction) {
  try {
    //@ts-ignore
    const res = yield axios.patch(`weeks/${action.payload.weekId}`)
    yield put(updateWeekSuccess(res.data.payload.weights))
  } catch (err) {
    yield put(updateWeekFail(err))
  }
}

const weekWatcher = [
  takeLatest('CREATE_WEEK_REQUEST', createWeekSaga),
  takeLatest('UPDATE_WEEK_REQUEST', updateWeekSaga),
  takeLatest('UPDATE_WEEK_REQUEST', updateAchievedWeightSaga)
]

export default weekWatcher
