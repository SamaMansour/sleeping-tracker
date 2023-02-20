import * as types from "../actions/types"
import jwtDecode from "jwt-decode"

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  _id: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USER:
    case types.SIGN_IN:
    case types.SIGN_UP:
      const user = jwtDecode(action.payload)

      return {
        ...state,
        token: action.payload,
        name: user.name,
        email: user.email,
        _id: user._id
      }

    case types.SIGN_OUT:
      return {
        token: null,
        name: null,
        email: null,
        _id: null
      }

    default:
      return state
  }
}

export default authReducer