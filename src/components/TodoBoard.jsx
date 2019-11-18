import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {getAllTodos, createDeleteTodoAction} from '../redux/action/todoActions';

export class TodoBoard extends React.Component{

    constructor(props) {
        super(props);
        props.getAllTodos();
    }

    render(){
        console.log(this.props);

        return(
            <div>
                {
                    this.props.todos.map(todo => {
                        return <Todo key={todo.id} todo={todo} deleteFunction={this.props.createDeleteTodoAction}/>
                    })
                }
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {getAllTodos, createDeleteTodoAction};

export default connect(mapStateToProps, mapDispatchToProps)(TodoBoard);




