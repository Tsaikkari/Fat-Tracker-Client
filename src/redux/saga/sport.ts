import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  createSportSuccess,
  createSportFail
} from '../actions/sport'
import { CreateSportRequestAction } from '../actions/types'

function* createSportSaga(action: CreateSportRequestAction) {
  const { sport } = action.payload
  try {
    //@ts-ignore
    const res = yield axios.post('sports', sport)
    yield put(createSportSuccess(res.data.payload))
  } catch (err) {
    yield put(createSportFail(err))
  }
}

const sportWatcher = [
  takeLatest('CREATE_SPORT_REQUEST', createSportSaga)
]

export default sportWatcher