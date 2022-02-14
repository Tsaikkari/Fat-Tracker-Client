import { combineReducers } from 'redux'

import user from './user'
import auth from './auth'
import week from './week'
import weeks from './weeks'
import fattyFood from './fattyFood'
import fattyFoods from './fattyFoods'
import sport from './sport'
import sports from './sports'
import weight from './weight'
import weights from './weights'

const rootReducer = () =>
  combineReducers({
    user,
    auth,
    week,
    weeks,
    fattyFood,
    fattyFoods,
    sport,
    sports,
    weight,
    weights
  })

export default rootReducer
