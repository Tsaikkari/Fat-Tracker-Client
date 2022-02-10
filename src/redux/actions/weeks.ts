import {
  GET_USER_WEEKS_REQUEST,
  GET_USER_WEEKS_SUCCESS,
  GET_USER_WEEKS_FAIL,
  Week
} from './types'

export const getUserWeeksRequest = () => {
  return {
    type: GET_USER_WEEKS_REQUEST,
  }
}

export const getUserWeeksSuccess = (list: Week[]) => {
  return {
    type: GET_USER_WEEKS_SUCCESS,
    payload: list
  }
}

export const getUserWeeksFail = (error: any) => {
  return {
    type: GET_USER_WEEKS_FAIL,
    payload: {
      error
    }
  }
}