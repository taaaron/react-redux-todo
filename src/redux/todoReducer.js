import {ADD_TODO, DELETE_TODO} from './types';

export const todoReducer = (state = [], action = {type:''}) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, action.todo];
        case DELETE_TODO:
            return state.filter(todo => todo != action.todo);
        default:
            return state;
    }
}