import { ActionTypes } from "../constants/actionTypes";

export const setTodos=(todos)=>{
return {
    type:ActionTypes.SET_TODOS,
    payload:todos
}
}

export const selectedTodos=(todo)=>{
    return {
        type:ActionTypes.SELECTED_TODO,
        payload:todo
    }
    }