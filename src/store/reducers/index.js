import { combineReducers } from "redux"
import entryReducer from "./entryReducer"
import authReducer from "./authReducer"
import loadingReducer from "./loadingReducer"

const rootReducer = combineReducers({
  entry: entryReducer,
  auth: authReducer,
  loading: loadingReducer
})

export default rootReducer