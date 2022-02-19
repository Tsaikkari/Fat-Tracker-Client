import {
  CREATE_SPORT_REQUEST,
  CREATE_SPORT_SUCCESS,
  CREATE_SPORT_FAIL,
  DELETE_SPORT_REQUEST,
  DELETE_SPORT_SUCCESS,
  DELETE_SPORT_FAIL,
  Sport
} from './types'

export const createSportRequest = (sport: Sport) => {
  return {
    type: CREATE_SPORT_REQUEST,
    payload: {
      sport
    }
  }
}

export const createSportSuccess = (sport: Sport) => {
  return {
    type: CREATE_SPORT_SUCCESS,
    payload: {
      sport
    }
  }
}

export const createSportFail = (error: any) => {
  return {
    type: CREATE_SPORT_FAIL,
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    }
  }
}

export const deleteSportRequest = (id: string) => {
  return {
    type: DELETE_SPORT_REQUEST,
    payload: id
  }
}

export const deleteSportSuccess = () => {
  return {
    type: DELETE_SPORT_SUCCESS,
  }
}

export const deleteSportFail = (error: any) => {
  return {
    type: DELETE_SPORT_FAIL,
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    }
  }
}

