import {GET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO} from '../types';
import Todo from '../../model/todo'

const initialState = [new Todo("testing")];

export const todoReducer = (state = [...initialState], action = {type:''}) => {
    console.log("Reducer");
    switch(action.type) {
        case GET_TODOS:
            return action.todo;
        case ADD_TODO:
            return [...state, action.todo];
        case  EDIT_TODO:
            return state.map((todo) => {
                if (todo === action.todo.prevState) {
                   return action.todo.editState;
                }
                return todo;
            })
        case DELETE_TODO:
            return state.filter(todo => todo !== action.todo);
        default:
            return state;
    }
}

