import {
  CREATE_FATTYFOOD_SUCCESS,
  DELETE_FATTYFOOD_SUCCESS,
  FattyFoodActions,
} from '../actions/types'

const initState = {
  fattyFood: {}
}

const fattyFood = (state = initState, action: FattyFoodActions) => {
  switch (action.type) {
    case CREATE_FATTYFOOD_SUCCESS:
      return { ...state, fattyFood: action.payload }
    case DELETE_FATTYFOOD_SUCCESS:
      return  {}
    default: 
      return state
  }
}

export default fattyFood