import {
  AuthActions,
  SINGUP_USER_SUCCESS,
  GOOGLE_LOGIN_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  SET_LOGGED_IN,
  GET_USER_PROFILE_SUCCESS,
  UPDATE_USER_SUCCESS, 
  DELETE_USER_SUCCESS,
} from '../actions/types'

const auth = (state = {}, action: AuthActions) => {
  switch (action.type) {
    case SINGUP_USER_SUCCESS:
      return { ...state }
    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
        loading: false
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
        loading: false,
      }
    case SET_LOGGED_IN:
      return { ...state, isLoggedIn: true, loading: false }
    case LOGOUT_USER:
      return {}
    case GET_USER_PROFILE_SUCCESS:
      return { ...state, user: action.payload, isLoggedIn: true, loading: false }
    case UPDATE_USER_SUCCESS:
      return { ...state, ...action.payload, loading: false }
    case DELETE_USER_SUCCESS:
      return { ...state, loading: false }
    default:
      return state
  }
}

export default auth
