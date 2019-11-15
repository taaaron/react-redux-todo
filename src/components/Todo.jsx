import React from 'react';
import PropTypes from 'prop-types';

  const Todo=(props)=> {

    return (
        <div>
            <p>
                {props.todo.text}
                <input type='checkbox'/>
            </p>
        </div>)
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired
}
export default Todo;

