import React, { Component } from 'react';
import * as p from 'prop-types';

const TodoItem = (props)=>{
    return  (
        <div className="todoItemDiv">
           <li 
            className={props.task.completed ?'completed list-group-item col-md-8':'list-group-item col-md-9'}
            onClick={()=>props.handleClick(props.task)}> {props.task.name}
            </li>

            <button className="col-md-1 btn btn-primary btn-lg "onClick={()=>props.handleDelete(props.task)}>Delete</button>
        </div>
        );
    
}

TodoItem.propTypes = {
    task:p.object,
    handleClick:p.func
}

export default TodoItem;