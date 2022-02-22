import {
  WeekActions,
  CREATE_WEEK_SUCCESS,
  UPDATE_WEEK_SUCCESS,
} from '../actions/types'

const initState = {
  week: {
    achievedWeight: null,
    weights: {
      currentWeight: null,
      goalWeight: null,
    },
  },
  loading: true,
}

const week = (state = initState, action: WeekActions) => {
  switch (action.type) {
    case CREATE_WEEK_SUCCESS:
      return { ...state, week: action.payload, loading: false }
    case UPDATE_WEEK_SUCCESS:
      console.log(action.payload, 'reducerweek')
      const achievedWeight = action.payload.achievedWeight
      // TODO: fix
      if (!achievedWeight) {
        return {
          ...state,
          ...action.payload,
          loading: false,
        }
      } 
      return {
        ...state,
        achievedWeight,
        loading: false,
      }
    default:
      return state
  }
}

export default week
