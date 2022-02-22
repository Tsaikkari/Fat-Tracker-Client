import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  createWeekSuccess,
  createWeekFail,
  updateWeekSuccess,
  updateWeekFail,
} from '../actions/week'
import { CreateWeekRequestAction, DeleteWeightsRequestAction, UpdateWeekRequestAction } from '../actions/types'

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
    console.log(res.data.payload, 'sagaresdatapayload')
    yield put(updateWeekSuccess(res.data.payload)) 
  } catch (err: any) {
    yield put(updateWeekFail(err.message))
  }
}

function* addAchievedWeightSaga(action: UpdateWeekRequestAction) {
  const { achievedWeight }= action.payload
  const weekId = action.payload.weekId  
  try {
    //@ts-ignore
    const res = yield axios.patch(`weeks/${weekId}`, { weights: { achievedWeight }}) 
    console.log(res.data.payload)
    yield put(updateWeekSuccess(res.data.payload)) 
  } catch (err: any) {
    yield put(updateWeekFail(err.message))
  }
}

function* deleteWeightsSaga(action: DeleteWeightsRequestAction) {
  const { currentWeight, goalWeight } = action.payload
  const weekId = action.payload.weekId
  console.log(action.payload.weekId, 'weekidsaga')
  try {
    //@ts-ignore
    const res = yield axios.patch(`weeks/${weekId}`, { weights: { currentWeight, goalWeight }})
    console.log(res.data.payload, 'resdatapayload')
    yield put(updateWeekSuccess(res.data.payload))
  } catch (err: any) {
    yield put(updateWeekFail(err.message))
  }
}

const weekWatcher = [
  takeLatest('CREATE_WEEK_REQUEST', createWeekSaga),
  takeLatest('UPDATE_WEEK_REQUEST', addWeightsSaga),
  //takeLatest('UPDATE_WEEK_REQUEST', addAchievedWeightSaga),
  takeLatest('UPDATE_WEEK_REQUEST', deleteWeightsSaga)
]

export default weekWatcher
