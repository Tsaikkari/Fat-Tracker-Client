import {
  CREATE_SPORT_SUCCESS,
  DELETE_SPORT_SUCCESS,
  SportActions
} from '../actions/types'

const initState = {
  sport: {}
}

const sport = (state = initState, action: SportActions) => {
  switch (action.type) {
    case CREATE_SPORT_SUCCESS:
      return { ...state, sport: action.payload }
    case DELETE_SPORT_SUCCESS:
      return {}
    default: 
      return state
  }
}

export default sport