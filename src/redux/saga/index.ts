import { all } from 'redux-saga/effects'
import authWatcher from './auth'
import userWatcher from './user'
import weekWatcher from './week'
import resourcesWatcher from './resources'
import fattyFoodWatcher from './fattyFood'
import sportWatcher from './sport'

export default function* rootSaga() {
  yield all([
    ...userWatcher,
    ...authWatcher,
    ...weekWatcher,
    ...fattyFoodWatcher,
    ...sportWatcher,
    ...resourcesWatcher,
  ])
}
