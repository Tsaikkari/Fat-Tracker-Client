import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  createWeekSuccess,
  createWeekFail
} from '../actions/week'
import { CreateWeekRequestAction } from '../actions/types'

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

const weekWatcher = [
  takeLatest('CREATE_WEEK_REQUEST', createWeekSaga)
]

export default weekWatcher
