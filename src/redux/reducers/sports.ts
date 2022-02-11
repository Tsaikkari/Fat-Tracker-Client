import {
  GET_USER_SPORTS_SUCCESS,
  SportsActions
} from '../actions/types'

const initState = {
  list: []
}

const sports = (state = initState, action: SportsActions) => {
  switch (action.type) {
    case GET_USER_SPORTS_SUCCESS:
      return { ...state, list: action.payload }
    default: 
      return state
  }
}

export default sports