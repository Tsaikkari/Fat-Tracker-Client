import {
  SIGNUP_USER_REQUEST,
  SINGUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SET_LOGGED_IN,
  LOGOUT_USER,
  User,
  AuthActions
} from './types'

export const signupUserRequest = (name: string, email: string, password: string): AuthActions => {
  return {
    type: SIGNUP_USER_REQUEST,
    payload: { name, email, password},
  }
}

export const signupUserSuccess = () => {
  return {
    type: SINGUP_USER_SUCCESS,
  }
}

export const signupUserFail = (error: any) => {
  return {
    type: SIGNUP_USER_FAIL,
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    },
  }
}

export const loginUserRequest = (email: string, password: string, navigate: any) => {
  return {
    type: LOGIN_USER_REQUEST,
    payload: {
      userInfo: {
        email,
        password,
      },
      navigate
    }
  }
}

export const loginUserSuccess = (userData: User): AuthActions => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: userData,
  }
}

export const loginUserFail = (error: any) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    },
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  }
}

export const setLoggedIn = () => {
  return {
    type: SET_LOGGED_IN,
  }
}