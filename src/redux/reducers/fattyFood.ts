import {
  CREATE_FATTYFOOD_SUCCESS,
  FattyFoodActions
} from '../actions/types'

const initState = {
  fattyFood: {
    name: '',
    chosenDate: '',
    week: ''
  },
  loading: true,
  error: undefined
}

const fattyFood = (state = initState, action: FattyFoodActions) => {
  switch (action.type) {
    case CREATE_FATTYFOOD_SUCCESS:
      return { ...state, fattyFood: action.payload }
    default: 
      return state
  }
}

export default fattyFood