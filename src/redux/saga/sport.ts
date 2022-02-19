import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  createSportSuccess,
  createSportFail,
  deleteSportSuccess,
  deleteSportFail
} from '../actions/sport'
import { CreateSportRequestAction, DeleteSportRequestAction } from '../actions/types'

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

function* deleteSportSaga(action: DeleteSportRequestAction) {
  const sportId = action.payload
  try {
    //@ts-ignore
    yield axios.delete(`sports/${sportId}`)
    yield put(deleteSportSuccess())
  } catch (err: any) {
    yield put(deleteSportFail(err.message))
  }
}

const sportWatcher = [
  takeLatest('CREATE_SPORT_REQUEST', createSportSaga),
  takeLatest('DELETE_SPORT_REQUEST', deleteSportSaga)
]

export default sportWatcher