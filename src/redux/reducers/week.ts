import {
  WeekActions,
  CREATE_WEEK_SUCCESS,
  UPDATE_WEEK_SUCCESS,
} from '../actions/types'

const initState = {
  week: {
    achievedWeight: 0,
    weights: {
      currentWeight: 0,
      goalWeight: 0,
    },
  },
  loading: true,
}

const week = (state = initState, action: WeekActions) => {
  switch (action.type) {
    case CREATE_WEEK_SUCCESS:
      return { ...state, week: action.payload, loading: false }
    case UPDATE_WEEK_SUCCESS:
      return { ...state, ...action.payload, loading: false }
    default:
      return state
  }
}

export default week
