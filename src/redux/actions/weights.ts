import {
  GET_USER_WEIGHTS_REQUEST,
  GET_USER_WEIGHTS_SUCCESS,
  GET_USER_WEIGHTS_FAIL,
  Weights
} from './types'

export const getUserWeightsRequest = () => {
  return {
    type: typeof GET_USER_WEIGHTS_REQUEST
  }
}

export const getUserWeightsSuccess = (list: Weights) => {
  return {
    type: GET_USER_WEIGHTS_SUCCESS,
    payload: list
  }
}

export const getUserWeightsFail = (error: any) => {
  return {
    type: GET_USER_WEIGHTS_FAIL,
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    }
  }
}