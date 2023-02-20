import axios from "axios"
import * as types from "./types"

export const signUp = user => async dispatch => {
  try {
    const token = await axios.post("/users", user)

    localStorage.setItem("token", token.data)

    dispatch({
      type: types.SIGN_UP,
      payload: token.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const signIn = creds => async dispatch => {
  try {
    const token = await axios.post("/login", creds)

    localStorage.setItem("token", token.data)

    dispatch({
      type: types.SIGN_IN,
      payload: token.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const signOut = () => async dispatch => {
  localStorage.removeItem("token")

  dispatch({
    type: types.SIGN_OUT
  })
}

export const loadUser = () => (dispatch, getState) => {
  const token = getState().auth.token

  if (token)
    dispatch({
      type: types.LOAD_USER,
      payload: token
    })
  else return null
}