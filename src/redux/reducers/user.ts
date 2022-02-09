import {
  UPDATE_USER_SUCCESS, 
  DELETE_USER_SUCCESS,
  UserActions
} from '../actions/types'

const initState = {
  userInfo: {
    id: '',
    name: '',
    email: '',
    password: '',
    isAdmin: false,
    lifeStyles: ''
  }
}

const user = (state = initState, action: UserActions) => {
  switch (action.type) {
    case UPDATE_USER_SUCCESS:
      return { ...state, ...action.payload, loading: false }
    case DELETE_USER_SUCCESS:
      return { ...state, loading: false }
    default:
      return state
  }
}

export default user
