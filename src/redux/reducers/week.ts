import {
  WeekActions,
  CREATE_WEEK_SUCCESS,
  UPDATE_WEEK_SUCCESS,
  DELETE_WEIGHTS_SUCCESS,
} from '../actions/types'

const initState = {
  week: {},
  loading: true,
}

const week = (state = initState, action: WeekActions) => {
  switch (action.type) {
    case CREATE_WEEK_SUCCESS:
      return { ...state, week: action.payload, loading: false }
    case UPDATE_WEEK_SUCCESS:
      return {
        ...state,
        week: {
          ...state, 
          weights: {
            currentWeight: action.payload.currentWeight,
            goalWeight: action.payload.goalWeight,
            achievedWeight: action.payload.achievedWeight
          },
          loading: false,
        },
      }
    default:
      return state
  }
}

export default week
