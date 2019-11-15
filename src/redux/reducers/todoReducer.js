import {ADD_TODO, DELETE_TODO, EDIT_TODO} from '../types';
import Todo from '../../model/todo'

const initialState = [new Todo("testing")];

export const todoReducer = (state = [...initialState], action = {type:''}) => {
    switch(action.type) {
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

