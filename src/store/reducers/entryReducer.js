import * as types from "../actions/types"

const initialState = true

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_IS_LOADING:
      return action.payload.isLoading
    default:
      return state
  }
}

export default entryReducer