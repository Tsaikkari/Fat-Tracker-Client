import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  createFattyFoodSuccess,
  createFattyFoodFail
} from '../actions/fattyFood'
import { CreateFattyFoodRequestAction } from '../actions/types'

function* createFattyFoodSaga(action: CreateFattyFoodRequestAction) {
  const { fattyFood } = action.payload
  try {
    //@ts-ignore
    const res = yield axios.post('fattyfoods', fattyFood) 
    yield put(createFattyFoodSuccess(res.data.payload))
  } catch (err) {
    yield put(createFattyFoodFail(err))
  }
}

const fattyFoodWatcher = [
  takeLatest('CREATE_FATTYFOOD_REQUEST', createFattyFoodSaga)
]

export default fattyFoodWatcher