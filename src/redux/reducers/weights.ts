import {
  GET_USER_WEIGHTS_SUCCESS,
  WeightsActions
} from '../actions/types'

const initState = {
  list: []
}

const weights = (state = initState, action: WeightsActions) => {
  switch (action.type) {
    case GET_USER_WEIGHTS_SUCCESS:
      console.log(action.payload)
      return { ...state, list: action.payload }
    default: 
      return state
  }
}

export default weights

