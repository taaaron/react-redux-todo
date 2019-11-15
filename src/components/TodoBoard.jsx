import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';

export class TodoBoard extends React.Component{

    render(){
        console.log(this.props);

        return(
            <div>
                {
                    this.props.todos.map(todo => {
                        return <Todo key='1' todo={todo}/>
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

export default connect(mapStateToProps)(TodoBoard);




