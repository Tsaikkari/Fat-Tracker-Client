import { all } from 'redux-saga/effects'
import authWatcher from './auth'
import userWatcher from './user'

export default function* rootSaga() {
    yield all([...userWatcher, ...authWatcher ])
}