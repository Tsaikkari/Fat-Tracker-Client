import {
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UserUpdate,
  User,
  DeleteUserRequestAction
} from './types'

export const getUserProfileRequest = (id: string) => {
  return {
    type: GET_USER_PROFILE_REQUEST,
    payload: id,
  }
}

export const getUserProfileSuccess = (payload: User) => {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload,
  }
}

export const getUserProfileFail = (error: any) => {
  return {
    type: GET_USER_PROFILE_FAIL,
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    },
  }
}

export const updateUserRequest = (user: Partial<UserUpdate>) => {
  return {
    type: UPDATE_USER_REQUEST,
    payload: user
  }
}

export const updateUserSuccess = (user: UserUpdate) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user
  }
}

export const updateUserFail = (error: any) => {
  return {
    type: UPDATE_USER_FAIL,
    payload: {
      error:
        error.response && error.data.message
          ? error.response.data.message
          : error.message,
    },
  }
}

export const deleteUserRequest = (id: DeleteUserRequestAction) => {
  return {
    type: DELETE_USER_REQUEST,
    payload: id
  }
}

export const deleteUserSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  }
}

export const deleteUserFail = (error: any) => {
  return {
    type: DELETE_USER_FAIL,
    payload: error,
  }
}
