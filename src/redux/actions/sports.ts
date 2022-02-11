import {
  GET_USER_SPORTS_REQUEST,
  GET_USER_SPORTS_SUCCESS,
  GET_USER_SPORTS_FAIL,
  Sports
} from './types'

export const getUserSportsRequest = () => {
  return {
    type: GET_USER_SPORTS_REQUEST,
  }
}

export const getUserSportsSuccess = (list: Sports[]) => {
  return {
    type: GET_USER_SPORTS_SUCCESS,
    payload: list
  }
}

export const getUserSportsFail = (error: any) => {
  return {
    type: GET_USER_SPORTS_FAIL,
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    }
  }
}