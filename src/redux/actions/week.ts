import {
  CREATE_WEEK_REQUEST,
  CREATE_WEEK_SUCCESS,
  CREATE_WEEK_FAIL,
  Week
} from './types'

export const createWeekRequest = (week: Week) => {
  return {
    type: CREATE_WEEK_REQUEST,
    payload: {
      week
    }
  }
}

export const createWeekSuccess = (week: Week) => {
  return {
    type: CREATE_WEEK_SUCCESS,
    payload: {
      week
    }
  }
}

export const createWeekFail = (error: any) => {
  return {
    type: CREATE_WEEK_FAIL,
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    }
  }
}


