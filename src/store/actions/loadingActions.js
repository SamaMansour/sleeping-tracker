import * as types from "./types"

export const setIsLoading = isLoading => async dispatch => {
  dispatch({
    type: types.SET_IS_LOADING,
    payload: {
      isLoading
    }
  })
}