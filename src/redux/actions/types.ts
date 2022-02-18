export const SIGNUP_USER_REQUEST = 'SIGNUP_USER_REQUEST'
export const SINGUP_USER_SUCCESS = 'SINGUP_USER_SUCCESS'
export const SIGNUP_USER_FAIL = 'SIGNUP_USER_FAIL'
export const GOOGLE_LOGIN_REQUEST = 'GOOGLE_LOGIN_REQUEST'
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS'
export const GOOGLE_LOGIN_FAIL = 'GOOGLE_LOGIN_FAIL'
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

export const CREATE_WEEK_REQUEST = 'CREATE_WEEK_REQUEST'
export const CREATE_WEEK_SUCCESS = 'CREATE_WEEK_SUCCESS'
export const CREATE_WEEK_FAIL = 'CREATE_WEEK_FAIL'
export const UPDATE_WEEK_REQUEST = 'UPDATE_WEEK_REQUEST'
export const UPDATE_WEEK_SUCCESS = 'UPDATE_WEEK_SUCCESS'
export const UPDATE_WEEK_FAIL = 'UPDATE_WEEK_FAIL'
export const GET_USER_WEEKS_REQUEST = 'GET_USER_WEEKS_REQUEST'
export const GET_USER_WEEKS_SUCCESS = 'GET_USER_WEEKS_SUCCESS'
export const GET_USER_WEEKS_FAIL = 'GET_USER_WEEKS_FAIL'

export const CREATE_FATTYFOOD_REQUEST = 'CREATE_FATTYFOOD_REQUEST'
export const CREATE_FATTYFOOD_SUCCESS = 'CREATE_FATTYFOOD_SUCCESS'
export const CREATE_FATTYFOOD_FAIL = 'CREATE_FATTYFOOD_FAIL'
export const GET_USER_FATTYFOODS_REQUEST = 'GET_USER_FATTYFOODS_REQUEST'
export const GET_USER_FATTYFOODS_SUCCESS = 'GET_USER_FATTYFOODS_SUCCESS'
export const GET_USER_FATTYFOODS_FAIL = 'GET_USER_FATTYFOODS_FAIL'

export const CREATE_SPORT_REQUEST = 'CREATE_SPORT_REQUEST'
export const CREATE_SPORT_SUCCESS = 'CREATE_SPORT_SUCCESS'
export const CREATE_SPORT_FAIL = 'CREATE_SPORT_FAIL'
export const GET_USER_SPORTS_REQUEST = 'GET_USER_SPORTS_REQUEST'
export const GET_USER_SPORTS_SUCCESS = 'GET_USER_SPORTS_SUCCESS'
export const GET_USER_SPORTS_FAIL = 'GET_USER_SPORTS_FAIL'

/////// State types ///////
// Error type
export type Err = {
  error: any
}

// Auth types
export type GoogleLogin = {
  idToken: string
}

export type LoginForm = {
  email: string
  password: string
}

export type SignupForm = {
  name: string
  email: string
  password: string
}

export type User = {
  _id: string
  isAdmin: false
  lifeStyles: string
  name: string
  email: string
  password: string
  weights: Weights
}

// Type update user
export type UserUpdate = {
  _id: string
  email: string
  name: string
  lifeStyles: string
}

// Week types
export type Week = {
  date: string
  currentWeight: number | string
  goalWeight: number | string
  achievedWeight: number | string
}

// Type Date
export type Date = {
  date: string
}

export type Weights = {
  currentWeight: number | string
  goalWeight: number | string
  achievedWeight: number | string
}

// Type update week
export type WeekUpdate = {
  weights: Weights
  weekId: string
}

export type Weeks = {
  list: Week[]
}

// Fatty food types
export type FattyFood = {
  name: string
  chosenDate: string
  weekId: string
}

// Sport types
export type Sport = {
  sport: string
  date: string
  duration: number | string
  weekId: string
}

/////// Action types ///////
// Auth actions
// Signup
export type SignupRequestAction = {
  type: typeof SIGNUP_USER_REQUEST
  payload: SignupForm
}

export type SignupSuccessAction = {
  type: typeof SINGUP_USER_SUCCESS
}

export type SignupFailAction = {
  type: typeof SIGNUP_USER_FAIL
  payload: Err
}

// Google login
export type GoogleLoginRequestAction = {
  type: typeof GOOGLE_LOGIN_REQUEST
  payload: {
    googleLogin: GoogleLogin
    navigate: any
  }
}

export type GoogleLoginSuccessAction = {
  type: typeof GOOGLE_LOGIN_SUCCESS
  payload: User
}

export type GoogleLoginFailAction = {
  type: typeof GOOGLE_LOGIN_FAIL
  payload: any
}

// Login
export type LoginRequestAction = {
  type: typeof LOGIN_USER_REQUEST
  payload: {
    loginForm: LoginForm
    navigate: any
  }
}

export type LoginSuccessAction = {
  type: typeof LOGIN_USER_SUCCESS
  payload: User
}

export type LoginFailAction = {
  type: typeof LOGIN_USER_FAIL
  payload: any
}

export type SetLoggedInAction = {
  type: typeof SET_LOGGED_IN
}

export type LogoutAction = {
  type: typeof LOGOUT_USER
}

// User actions
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
  payload: Err
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
  payload: Err
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
  payload: Err
}

// Week actions
// Create week
export type CreateWeekRequestAction = {
  type: typeof CREATE_WEEK_REQUEST
  payload: {
    week: Week
  }
}

export type CreateWeekSuccessAction = {
  type: typeof CREATE_WEEK_SUCCESS
  payload: {
    week: Week
  }
}

export type CreateWeekFailAction = {
  type: typeof CREATE_WEEK_FAIL
  payload: Err
}

// Update week
export type UpdateWeekRequestAction = {
  type: typeof UPDATE_WEEK_REQUEST
  payload: Partial<WeekUpdate>
}

export type UpdateWeekSuccessAction = {
  type: typeof UPDATE_WEEK_SUCCESS
  payload: Week
}

export type UpdateWeekFailAction = {
  type: typeof UPDATE_WEEK_FAIL
  payload: Err
}

// Weeks actions
// Get user weeks
export type GetUserWeeksRequestAction = {
  type: typeof GET_USER_WEEKS_REQUEST
}

export type GetUserWeeksSuccessAction = {
  type: typeof GET_USER_WEEKS_SUCCESS
  payload: Weeks
}

export type GetUserWeeksFailAction = {
  type: typeof GET_USER_WEEKS_FAIL
  payload: Err
}

// Fatty food actions
// Create user fatty foods
export type CreateFattyFoodRequestAction = {
  type: typeof CREATE_FATTYFOOD_REQUEST
  payload: {
    fattyFood: FattyFood
  }
}

export type CreateFattyFoodSuccessAction = {
  type: typeof CREATE_FATTYFOOD_SUCCESS
  payload: {
    fattyFood: FattyFood
  }
}

export type CreateFattyFoodFailAction = {
  type: typeof CREATE_FATTYFOOD_FAIL
  payload: Err
}

// Fatty foods actions
// Get user fatty food list
export type GetUserFattyFoodsRequestAction = {
  type: typeof GET_USER_FATTYFOODS_REQUEST
}

export type GetUserFattyFoodsSuccessAction = {
  type: typeof GET_USER_FATTYFOODS_SUCCESS
  payload: FattyFood
}

export type GetUserFattyFoodsFailAction = {
  type: typeof GET_USER_FATTYFOODS_FAIL
  payload: Err
}

// Sport actions
// Create sport
export type CreateSportRequestAction = {
  type: typeof CREATE_SPORT_REQUEST
  payload: {
    sport: Sport
  }
}

export type CreateSportSuccessAction = {
  type: typeof CREATE_SPORT_SUCCESS
  payload: {
    sport: Sport
  }
}

export type CreateSportFailAction = {
  type: typeof CREATE_SPORT_FAIL
  payload: Err
}

// Sports actions
// Get user sport list
export type GetUserSportsRequestAction = {
  type: typeof GET_USER_SPORTS_REQUEST
  payload: Sport
}

export type GetUserSportsSuccessAction = {
  type: typeof GET_USER_SPORTS_SUCCESS
  payload: Sport
}

export type GetUserSportsFailAction = {
  type: typeof GET_USER_SPORTS_FAIL
  payload: Err
}

/////// Unions ///////
export type AuthActions =
  | SignupRequestAction
  | SignupSuccessAction
  | SignupFailAction
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailAction
  | SetLoggedInAction
  | LogoutAction
  | GetUserProfileRequestAction
  | GetUserProfileSuccessAction
  | GetUserProfileFailAction
  | UpdateUserRequestAction
  | UpdateUserSuccessAction
  | UpdateUserFailAction
  | DeleteUserRequestAction
  | DeleteUserSuccessAction
  | DeleteUserFailAction
  | GoogleLoginRequestAction
  | GoogleLoginSuccessAction
  | GoogleLoginFailAction

export type WeekActions =
  | CreateWeekRequestAction
  | CreateWeekSuccessAction
  | CreateWeekFailAction
  | UpdateWeekRequestAction
  | UpdateWeekSuccessAction
  | UpdateWeekFailAction

export type WeeksActions =
  | GetUserWeeksRequestAction
  | GetUserWeeksSuccessAction
  | GetUserWeeksFailAction

export type FattyFoodActions =
  | CreateFattyFoodRequestAction
  | CreateFattyFoodSuccessAction
  | CreateFattyFoodFailAction

export type FattyFoodsActions =
  | GetUserFattyFoodsRequestAction
  | GetUserFattyFoodsSuccessAction
  | GetUserFattyFoodsFailAction

export type SportActions =
  | CreateSportRequestAction
  | CreateSportSuccessAction
  | CreateSportFailAction

export type SportsActions =
  | GetUserSportsRequestAction
  | GetUserSportsSuccessAction
  | GetUserSportsFailAction
