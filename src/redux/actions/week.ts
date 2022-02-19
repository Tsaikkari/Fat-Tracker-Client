import {
  CREATE_WEEK_REQUEST,
  CREATE_WEEK_SUCCESS,
  CREATE_WEEK_FAIL,
  UPDATE_WEEK_REQUEST,
  UPDATE_WEEK_SUCCESS,
  UPDATE_WEEK_FAIL,
  Week,
  Date,
  WeekUpdate
} from './types'

export const createWeekRequest = (week: Date) => {
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

export const updateWeekRequest = (week: Partial<WeekUpdate>) => {
  return {
    type: UPDATE_WEEK_REQUEST,
    payload: week
  }
}

export const updateWeekSuccess = (week: WeekUpdate) => {
  console.log(week, 'weekinactions')
  return {
    type: UPDATE_WEEK_SUCCESS,
    payload: week
  }
}

export const updateWeekFail = (error: any) => {
  return {
    type: UPDATE_WEEK_FAIL,
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    },
  }
}


