import {
  WeekActions,
  CREATE_WEEK_SUCCESS,
} from '../actions/types'

const initState = {
  week: {
    date: ''
  },
  loading: true,
  error: undefined
}

const week = (state = initState, action: WeekActions) => {
  switch (action.type) {
    case CREATE_WEEK_SUCCESS:
      console.log(action.payload, 'action payload')
      return { ...state, week: { ...state, ...action.payload }}
    default: 
      return state
  }
}

export default week