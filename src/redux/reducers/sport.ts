import {
  CREATE_SPORT_SUCCESS,
  SportActions
} from '../actions/types'

const initState = {
  sport: {
    sport: '',
    date: '',
    duration: 0,
    week: ''
  },
  loading: true,
  error: undefined
}

const sport = (state = initState, action: SportActions) => {
  switch (action.type) {
    case CREATE_SPORT_SUCCESS:
      return { ...state, sport: action.payload }
    default: 
      return state
  }
}

export default sport