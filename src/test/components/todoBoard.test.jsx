import {shallow, mount} from 'enzyme';
import {TodoBoard} from '../../components/TodoBoard';
import React from 'react';
import Todo from '../../model/todo';

describe('todoBoard should display todos',()=> {
    it('should have 1 todo displayed',()=>{
        const initialState = {
            todos: [new Todo("Friday afternoon stuff with A-Aaron & Manny")]
        };

        const wrapper = shallow(<TodoBoard todos={initialState.todos}/>);

         expect(wrapper.find('Todo')).toHaveLength(1);
    })
})