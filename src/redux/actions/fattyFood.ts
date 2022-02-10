import {
  CREATE_FATTYFOOD_REQUEST,
  CREATE_FATTYFOOD_SUCCESS,
  CREATE_FATTYFOOD_FAIL,
  FattyFood
} from './types'

export const createFattyFoodRequest = (fattyFood: FattyFood) => {
  return {
    type: CREATE_FATTYFOOD_REQUEST,
    payload: {
      fattyFood
    }
  }
}

export const createFattyFoodSuccess = (fattyFood: FattyFood) => {
  return {
    type: CREATE_FATTYFOOD_SUCCESS,
    payload: {
      fattyFood
    }
  }
}

export const createFattyFoodFail = (error: any) => {
  return {
    type: CREATE_FATTYFOOD_FAIL,
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    }
  }
}
