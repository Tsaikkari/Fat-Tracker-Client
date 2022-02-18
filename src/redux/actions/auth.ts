import {
  SIGNUP_USER_REQUEST,
  SINGUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SET_LOGGED_IN,
  LOGOUT_USER,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UserUpdate,
  User,
  DeleteUserRequestAction,
  LoginForm,
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

export const googleLoginRequest = (idToken: string, navigate: any) => {
  return {
    type: GOOGLE_LOGIN_REQUEST,
    payload: {
      googleLogin: {
        idToken
      },
      navigate
    }
  }
}

export const googleLoginSuccess = (user: LoginForm) => {
  return {
    type: GOOGLE_LOGIN_SUCCESS,
    payload: user,
  }
}

export const googleLoginFail = (error: any) => {
  return {
    type: GOOGLE_LOGIN_FAIL,
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
      loginForm: {
        email,
        password,
      },
      navigate
    }
  }
}

export const loginUserSuccess = (user: LoginForm) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
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

export const getUserProfileRequest = (id: string) => {
  return {
    type: GET_USER_PROFILE_REQUEST,
    payload: id
  }
}

export const getUserProfileSuccess = (user: User) => {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload: user
  }
}

export const getUserProfileFail = (error: any) => {
  return {
    type: GET_USER_PROFILE_FAIL,
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    },
  }
}

export const updateUserRequest = (user: Partial<UserUpdate>) => {
  return {
    type: UPDATE_USER_REQUEST,
    payload: user
  }
}

export const updateUserSuccess = (user: UserUpdate) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user
  }
}

export const updateUserFail = (error: any) => {
  return {
    type: UPDATE_USER_FAIL,
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    },
  }
}

export const deleteUserRequest = (id: DeleteUserRequestAction) => {
  return {
    type: DELETE_USER_REQUEST,
    payload: id
  }
}

export const deleteUserSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  }
}

export const deleteUserFail = (error: any) => {
  return {
    type: DELETE_USER_FAIL,
    payload: error,
  }
}
