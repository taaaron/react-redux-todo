import React from 'react';
import PropTypes from 'prop-types';

const Todo=(props)=> {

    return (
        <div>
            <p>
                {props.todo.text}
                <input type='checkbox'/>
                <button name='delete' onClick={event => { event.preventDefault(); props.deleteFunction(props.todo.id)}}>
                    Delete
                </button>
            </p>
        </div>)
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteFunction: PropTypes.func.isRequired
}
export default Todo;

