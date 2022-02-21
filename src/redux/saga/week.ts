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
  } catch (err: any) {
    yield put(createWeekFail(err.message))
  }
}

function* addWeightsSaga(action: UpdateWeekRequestAction) {
  const { currentWeight, goalWeight } = action.payload 
  const weekId = action.payload.weekId 
  try {
    //@ts-ignore
    const res = yield axios.patch(`weeks/${weekId}`, { weights: { currentWeight, goalWeight }})
    yield put(updateWeekSuccess(res.data.payload)) 
  } catch (err: any) {
    yield put(updateWeekFail(err.message))
  }
}

function* addAchievedWeightSaga(action: UpdateWeekRequestAction) {
  const achievedWeight = Number(action.payload.achievedWeight) 
  const weekId = action.payload.weekId  
  try {
    //@ts-ignore
    const res = yield axios.patch(`weeks/${weekId}`, { achievedWeight }) 
    yield put(updateWeekSuccess(res.data.payload)) 
  } catch (err: any) {
    yield put(updateWeekFail(err.message))
  }
}

const weekWatcher = [
  takeLatest('CREATE_WEEK_REQUEST', createWeekSaga),
  takeLatest('UPDATE_WEEK_REQUEST', addWeightsSaga),
  takeLatest('UPDATE_WEEK_REQUEST', addAchievedWeightSaga)
]

export default weekWatcher
