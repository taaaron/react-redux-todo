import TodoAction from "../../model/todoAction";
import {GET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO, NULL_TYPE} from "../types"
import Todo from "../../model/todo";
import {apiCall} from "../../utils";

export const createAddTodoAction = (text) => {
    return (dispatch) => {
        const todo = new Todo(text);
        apiCall('POST', 'http://localhost:8080/todo/', todo)
            .then((response) => {
                dispatch({type: ADD_TODO, todo: response});
            })
            .catch(error => console.log(`error! ${error}`));
    };
}

export const createEditTodoAction = (prevTodo, newTodo) => {
    return new TodoAction(EDIT_TODO, prevTodo, newTodo);
}

export const createDeleteTodoAction = (id) => {
    return (dispatch) => {
        fetch(
            `http://localhost:8080/todo/${id}`,
            {
                method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            }
        )
            .then((response) => {
                console.log(response)
                dispatch({type: DELETE_TODO, todo: response});
                dispatch(getAllTodos()); //THIS WORKS!!! :D
            })

            .catch(error => console.log(`error! ${error}`));
    };
}

export const getAllTodos = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/todo/')
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                dispatch({type: GET_TODOS, todo: response}); //CAN ONLY PASS PURE OBJECTS FOR FINAL DISPATCH
            })
            .catch(error => console.log(`error! ${error}`));
    };
}