import {
  CREATE_WEIGHT_SUCCESS,
  WeightActions
} from '../actions/types'

const initState = {
  weight: {
    currentWeight: 0,
    goalWeight: 0,
    week: ''
  }
}

const weight = (state = initState, action: WeightActions) => {
  switch (action.type) {
    case CREATE_WEIGHT_SUCCESS:
      return { ...state, weight: action.payload }
    default: 
      return state
  }
}

export default weight