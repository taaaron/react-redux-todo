import TodoAction from "../../model/todoAction";
import {ADD_TODO, DELETE_TODO, EDIT_TODO, NULL_TYPE} from "../types"
import Todo from "../../model/todo";

export const createAddTodoAction = (text) => {
    if(!text){
        return new TodoAction(NULL_TYPE);
    }else {
        return new TodoAction(ADD_TODO, new Todo(text));
    }
}

export const createEditTodoAction = (prevTodo, newTodo) => {
    return new TodoAction(EDIT_TODO, prevTodo, newTodo);
}

export const createDeleteTodoAction = (todo) => {
    return new TodoAction(DELETE_TODO, todo);
}
