import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { getUserWeeksSuccess, getUserWeeksFail } from '../actions/weeks'
import { getUserFattyFoodsSuccess, getUserFattyFoodsFail } from '../actions/fattyFoods'
import { getUserSportsSuccess, getUserSportsFail } from '../actions/sports'
import { getUserWeightsSuccess, getUserWeightsFail } from '../actions/weights'

function* getUserWeeksSaga() {
  try {
    //@ts-ignore
    const res = yield axios.get('weeks/user')
    yield put(getUserWeeksSuccess(res.data.payload))
  } catch (error) {
    yield put(getUserWeeksFail(error))
  }
}

function* getUserWeightsSaga() {
  try {
    //@ts-ignore
    const res = yield axios.get('weights/user')
    console.log(res.data.payload, 'saga')
    yield put(getUserWeightsSuccess(res.data.payload))
  } catch (error) {
    yield put(getUserWeightsFail(error))
  }
}

function* getUserFattyFoodsSaga() {
  try {
    //@ts-ignore
    const res = yield axios.get('fattyFoods/user')
    yield put(getUserFattyFoodsSuccess(res.data.payload))
  } catch (error) {
    yield put(getUserFattyFoodsFail(error))
  }
}

function* getUserSportsSaga() {
  try {
    //@ts-ignore
    const res = yield axios.get('sports/user')
    yield put(getUserSportsSuccess(res.data.payload))
  } catch (error) {
    yield put(getUserSportsFail(error))
  }
}

const resourcesWatcher = [
  takeLatest('GET_USER_WEEKS_REQUEST', getUserWeeksSaga),
  takeLatest('GET_USER_WEIGHTS_REQUEST', getUserWeightsSaga),
  takeLatest('GET_USER_FATTYFOODS_REQUEST', getUserFattyFoodsSaga),
  takeLatest('GET_USER_SPORTS_REQUEST', getUserSportsSaga)
]

export default resourcesWatcher