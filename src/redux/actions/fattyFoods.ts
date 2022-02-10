import {
  GET_USER_FATTYFOODS_REQUEST,
  GET_USER_FATTYFOODS_SUCCESS,
  GET_USER_FATTYFOODS_FAIL,
  FattyFoods
} from './types'

export const getUserFattyFoodsRequest = () => {
  return {
    type: GET_USER_FATTYFOODS_REQUEST,
  }
}

export const getUserFattyFoodsSuccess = (list: FattyFoods[]) => {
  return {
    type: GET_USER_FATTYFOODS_SUCCESS,
    payload: list
  }
}

export const getUserFattyFoodsFail = (error: any) => {
  return {
    type: GET_USER_FATTYFOODS_FAIL,
    payload: {
      error
    }
  }
}