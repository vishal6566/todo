import {combineReducers}  from "redux"
import { todoReducer } from "./todoReducer"

const reducers=combineReducers({
    Todos:todoReducer,
})

export default reducers