import {
  AuthActions,
  SINGUP_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  SET_LOGGED_IN,
  GET_USER_PROFILE_SUCCESS,
} from '../actions/types'

const initState = {
  userInfo: {
    _id: '',
    name: '',
    email: '',
    password: '',
    isAdmin: false,
    lifeStyles: ''
  },
  isLoggedIn: false, 
  loading: true,
  error: undefined,
}

const auth = (state = initState, action: AuthActions) => {
  switch (action.type) {
    case SINGUP_USER_SUCCESS: 
      return { ...state }
    case LOGIN_USER_SUCCESS:
      return { ...state, userInfo: { ...state, ...action.payload }}
    case SET_LOGGED_IN:
      return { ...state, isLoggedIn: true, loading: false }
    case LOGOUT_USER:
      return { ...state, isLoggedIn: false, loading: false }
    case GET_USER_PROFILE_SUCCESS:
      return { ...state, loading: false }
    default:
      return state
  }
}

export default auth
