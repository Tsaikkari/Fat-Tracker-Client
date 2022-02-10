import { combineReducers } from 'redux'

import user from './user'
import auth from './auth'
import week from './week'
import weeks from './weeks'

const rootReducer = () =>
  combineReducers({ user, auth, week, weeks })

export default rootReducer