import {
  GET_USER_FATTYFOODS_SUCCESS,
  FattyFoodsActions
} from '../actions/types'

const initState = {
  list: []
}

const sports = (state = initState, action: FattyFoodsActions ) => {
  switch (action.type) {
    case GET_USER_FATTYFOODS_SUCCESS:
      return { ...state, list: action.payload }
    default: 
      return state
  }
}

export default sports