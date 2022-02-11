import {
  GET_USER_PROFILE_SUCCESS,
  UPDATE_USER_SUCCESS, 
  DELETE_USER_SUCCESS,
  UserActions
} from '../actions/types'

const initState = {
    id: '',
    name: '',
    email: '',
    password: '',
    isAdmin: false,
    lifeStyle: '',
    isLoggedIn: false,
    loading: true
}

const user = (state = initState, action: UserActions) => {
  switch (action.type) {
    case GET_USER_PROFILE_SUCCESS:
      return { ...state, ...action.payload, isLoggedIn: true, loading: false }
    case UPDATE_USER_SUCCESS:
      return { ...state, ...action.payload, loading: false }
    case DELETE_USER_SUCCESS:
      return { ...state, loading: false }
    default:
      return state
  }
}

export default user
