export const SIGNUP_USER_REQUEST = 'SIGNUP_USER_REQUEST'
export const SINGUP_USER_SUCCESS = 'SINGUP_USER_SUCCESS'
export const SIGNUP_USER_FAIL = 'SIGNUP_USER_FAIL'
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'
export const LOGOUT_USER = 'LOGOUT_USER'
export const SET_LOGGED_IN = 'SET_LOGGED_IN'
export const SET_LOADING = 'SET_LOADING'
export const GET_USER_PROFILE_REQUEST = 'GET_USER_PROFILE_REQUEST'
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS'
export const GET_USER_PROFILE_FAIL = 'GET_USER_PROFILE_FAIL'
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL'
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL'

export type LoginForm = {
  email: string
  password: string
}

export type SignupForm = LoginForm & {
  name: string
}

export type User = SignupForm & {
  _id: string
  isAdmin: false
  lifeStyles: string
}

// Auth actions
// Signup
export type SignupRequestAction = {
  type: typeof SIGNUP_USER_REQUEST
  payload: { 
    name: string
    email: string
    password: string 
  }
}

export type SignupSuccessAction = {
  type: typeof SINGUP_USER_SUCCESS
}

export type SignupFailAction = {
  type: typeof SIGNUP_USER_FAIL
  payload: any
}

// Login
export type LoginRequestAction = {
  type: typeof LOGIN_USER_REQUEST
  payload: {
    email: string
    password: string
  }
}

export type LoginSuccessAction = {
  type: string
  payload: User
}

export type LoginFailAction = {
  type: typeof LOGIN_USER_FAIL
  payload: any
}

// Get user
export type GetUserProfileRequestAction = {
  type: typeof GET_USER_PROFILE_REQUEST
  payload: User
}

export type GetUserProfileSuccessAction = {
  type: typeof GET_USER_PROFILE_SUCCESS
  payload: User
}

export type GetUserProfileFailAction = {
  type: typeof GET_USER_PROFILE_FAIL
  payload: any
}

// User actions
// Update user
export type UserUpdate = {
  email: string
  name: string
  lifeStyles: string
}

export type UpdateUserRequestAction = {
  type: typeof UPDATE_USER_REQUEST
  payload: Partial<UserUpdate>
}

export type UpdateUserSuccessAction = {
  type: typeof UPDATE_USER_SUCCESS
  payload: User
}

export type UpdateUserFailAction = {
  type: typeof UPDATE_USER_FAIL
  payload: {
    error: any
  }
}

// Delete user
export type DeleteUserRequestAction = {
  type: typeof DELETE_USER_REQUEST
  payload: User
}

export type DeleteUserSuccessAction = {
  type: typeof DELETE_USER_SUCCESS
}

export type DeleteUserFailAction = {
  type: typeof DELETE_USER_FAIL
  payload: {
    error: any
  }
}

export type AuthActions =
  | SignupRequestAction
  | SignupSuccessAction
  | SignupFailAction
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailAction

export type UserActions =
  | GetUserProfileRequestAction
  | GetUserProfileSuccessAction
  | GetUserProfileFailAction
  | UpdateUserRequestAction
  | UpdateUserSuccessAction
  | UpdateUserFailAction
  | DeleteUserRequestAction
  | DeleteUserSuccessAction
  | DeleteUserFailAction
