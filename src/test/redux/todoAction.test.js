import {createAddTodoAction, createEditTodoAction, createDeleteTodoAction } from '../../redux/action/todoActions';
import {ADD_TODO, DELETE_TODO, EDIT_TODO, NULL_TYPE} from '../../redux/types';
import TodoAction from '../../model/todoAction';
import Todo from '../../model/todo';

describe('todo action tests', ()=> {

    it('todo action create add todo given text',()=> {
        const text = 'go to the store';
        const todoModel = new Todo(text);
        const expected = new TodoAction(ADD_TODO,todoModel );
        expect(createAddTodoAction(text)).toEqual(expected);
    });

    it('todo action create add todo should not add todo if null text', ()=> {
        const text = null;
        const expected = new TodoAction(NULL_TYPE);
        expect(createAddTodoAction(text)).toEqual(expected);
    })

    it('should create edit action given valid prevTodo and valid newTodo', () => {
        const prevTodo = new Todo('go to bathroom');
        const newTodo = new Todo('so relieved');

        const expected = new TodoAction(EDIT_TODO, prevTodo, newTodo);

        expect(createEditTodoAction(prevTodo, newTodo)).toEqual(expected);
    });

    it('should create delete action given valid todo', () => {
        const todoModel = new Todo('Delete me');
        const expected = new TodoAction(DELETE_TODO, todoModel);
        expect(createDeleteTodoAction(todoModel)).toEqual(expected);
    });

})