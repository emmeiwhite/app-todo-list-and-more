import React, { Component } from 'react';
import * as p from 'prop-types';

// class TodoItem extends Component {
//     render() { 
//         return ( 
//         <li 
//             className={this.props.task.completed ?'completed list-group-item':'list-group-item'}
//             onClick={()=>this.props.handleClick(this.props.task)}> {this.props.task.name}</li>
//          );
//     }
// }
 
const TodoItem = (props)=>{
    return  (
        <li 
            className={props.task.completed ?'completed list-group-item':'list-group-item'}
            onClick={()=>props.handleClick(props.task)}> {props.task.name}</li>
        );
    
}

TodoItem.propTypes = {
    task:p.object,
    handleClick:p.func
}

export default TodoItem;