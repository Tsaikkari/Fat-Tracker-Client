import {
  GET_USER_WEEKS_SUCCESS,
  WeeksActions
} from '../actions/types'

const initState = {
  list: []
}

const weeks = (state = initState, action: WeeksActions ) => {
  switch (action.type) {
    case GET_USER_WEEKS_SUCCESS:
      return { ...state, list: action.payload }
    default: 
      return state
  }
}

export default weeks

