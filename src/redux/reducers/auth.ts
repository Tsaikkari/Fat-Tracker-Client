import {
  AuthActions,
  SINGUP_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  SET_LOGGED_IN,
} from '../actions/types'

const initState = {
  userInfo: {
    _id: '',
    name: '',
    email: '',
    password: '',
    isAdmin: false,
    lifeStyles: '',
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
      console.log(action.payload, 'reducer')
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        userInfo: action.payload,
      }
    case SET_LOGGED_IN:
      return { ...state, isLoggedIn: true, loading: false }
    case LOGOUT_USER:
      return {}
    default:
      return state
  }
}

export default auth
