import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  createWeightSuccess, 
  createWeightFail
} from '../actions/weight'
import { CreateWeightRequestAction } from '../actions/types'

function* createWeightSaga(action: CreateWeightRequestAction) {
  const { weight } = action.payload
  try {
    //@ts-ignore
    const res = yield axios.post('weights', weight)
    yield put(createWeightSuccess(res.data.payload))
  } catch (error) {
    yield put(createWeightFail(error))
  }
}

const weightWatcher = [
  takeLatest('CREATE_WEIGHT_REQUEST', createWeightSaga)
]

export default weightWatcher

