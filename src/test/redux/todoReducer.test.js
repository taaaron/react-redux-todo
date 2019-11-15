import {todoReducer} from "../../redux/reducers/todoReducer";
import {ADD_TODO, DELETE_TODO, EDIT_TODO} from "../../redux/types";
import todo from '../../model/todo';


describe('todoReducer tests', () => {
    it('should add a todo given action with ADD_TODO type and a valid todo', () => {
        const TODO = new todo('Go Shopping Card');

        const action = {type: ADD_TODO, todo: TODO};
        const expected = [TODO];
        expect(todoReducer([], action)).toEqual(expected);
    });

    describe('DELETE_TODO Tests', () => {
        it('should delete a todo given action  with DELETE_TODO', () =>{

            const TODO = new todo('thing to delete');


            const action = {type: DELETE_TODO, todo: TODO};
            const state = [TODO];
            const expected = [];

            expect(todoReducer(state,action)).toEqual(expected);
        });

        it('should return original state given action with DELETE_TODO that does not exist', () => {

            const TODO = new todo('thing to delete');
            const TODO2 = new todo('thing not to delete');
            const action = {type: DELETE_TODO, todo: TODO};
            const state = [TODO2];
            const expected = state;

            expect(todoReducer(state,action)).toEqual(expected);
        })
    });


    describe('EDIT_TODO Tests', () => {
        it('should edit a todo given action with EDIT_TODO given 1 item in state', () => {

            const TODO_PREVSTATE = new todo('thing to edit');
            const TODO_CURRENTSTATE = new todo('thing to edit edited :)')

            const action = {type: EDIT_TODO, todo: {prevState:TODO_PREVSTATE, editState:TODO_CURRENTSTATE}};
            const state = [TODO_PREVSTATE];
            const expected = [TODO_CURRENTSTATE];

            expect(todoReducer(state,action)).toEqual(expected);
        });
        it('should edit a todo given action with EDIT_TODO given 3 items in state', () => {

            const TODO_PREVSTATE = new todo('thing to edit1');
            const TODO_CURRENTSTATE = new todo('thing to edit edited :)')
            const TODO2 = new todo('thing to edit2');
            const TODO3 = new todo('thing to edit3');

            const action = {type: EDIT_TODO, todo: {prevState:TODO_PREVSTATE, editState:TODO_CURRENTSTATE}};
            const state = [ TODO2, TODO_PREVSTATE, TODO3];
            const expected = [TODO2, TODO_CURRENTSTATE, TODO3];

            expect(todoReducer(state,action)).toEqual(expected);
        });
        it('should return original state given action with EDIT_TODO doesn\'t find editState', () => {

            const TODO_PREVSTATE = new todo('thing to edit1');
            const TODO_CURRENTSTATE = new todo('thing to edit edited :)')
            const TODO2 = new todo('thing to edit2');
            const TODO3 = new todo('thing to edit3');

            const action = {type: EDIT_TODO, todo: {prevState:TODO_PREVSTATE, editState:TODO_CURRENTSTATE}};
            const state = [ TODO2, TODO3];
            const expected = state;

            expect(todoReducer(state,action)).toEqual(expected);
        });
    })


});