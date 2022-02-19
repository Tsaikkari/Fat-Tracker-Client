import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  createFattyFoodSuccess,
  createFattyFoodFail,
  deleteFattyFoodSuccess,
  deleteFattyFoodFail
} from '../actions/fattyFood'
import { CreateFattyFoodRequestAction, DeleteFattyFoodRequestAction } from '../actions/types'

function* createFattyFoodSaga(action: CreateFattyFoodRequestAction) {
  const { fattyFood } = action.payload
  try {
    //@ts-ignore
    const res = yield axios.post('fattyfoods', fattyFood) 
    yield put(createFattyFoodSuccess(res.data.payload))
  } catch (err: any) {
    yield put(createFattyFoodFail(err.message))
  }
}

function* deleteFattyFoodSaga(action: DeleteFattyFoodRequestAction) {
  const fattyFoodId = action.payload
  try {
    //@ts-ignore
    yield axios.delete(`fattyFoods/${fattyFoodId}`)
    yield put(deleteFattyFoodSuccess())
  } catch (err: any) {
    yield put(deleteFattyFoodFail(err.message))
  }
}

const fattyFoodWatcher = [
  takeLatest('CREATE_FATTYFOOD_REQUEST', createFattyFoodSaga),
  takeLatest('DELETE_FATTYFOOD_REQUEST', deleteFattyFoodSaga)
]

export default fattyFoodWatcher