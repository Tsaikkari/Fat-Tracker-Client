import { combineReducers } from 'redux'

import auth from './auth'
import week from './week'
import weeks from './weeks'
import fattyFood from './fattyFood'
import fattyFoods from './fattyFoods'
import sport from './sport'
import sports from './sports'

const rootReducer = () =>
  combineReducers({
    auth,
    week,
    weeks,
    fattyFood,
    fattyFoods,
    sport,
    sports
  })

export default rootReducer
