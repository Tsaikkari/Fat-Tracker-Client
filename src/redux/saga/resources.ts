import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { getUserWeeksSuccess, getUserWeeksFail } from '../actions/weeks'

function* getUserWeeksSaga() {
  try {
    //@ts-ignore
    const res = yield axios.get('weeks/user')
    yield put(getUserWeeksSuccess(res.data.payload))
  } catch (error) {
    yield put(getUserWeeksFail(error))
  }
}

const resourcesWatcher = [
  takeLatest('GET_USER_WEEKS_REQUEST', getUserWeeksSaga),
]

export default resourcesWatcher