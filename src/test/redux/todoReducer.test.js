import {todoReducer} from "../../redux/todoReducer";
import {ADD_TODO, DELETE_TODO} from "../../redux/types";

describe('todoReducer tests', () => {
    it('should add a todo given action with ADD_TODO type and a valid todo', () => {
        const action = {type: ADD_TODO, todo: 'Go Shopping Cart'};
        const expected = ['Go Shopping Cart'];
        expect(todoReducer([], action)).toEqual(expected);
    });

    it('should delete a todo given action  with DELETE_TODO', () =>{
        const action = {type: DELETE_TODO, todo: 'thing to delete'};
        const state = ['thing to delete'];
        const expected = [];

        expect(todoReducer(state,action)).toEqual(expected);
    });
});