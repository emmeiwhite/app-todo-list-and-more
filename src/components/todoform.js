import React from 'react';

const TodoForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <h1>Add the List </h1>
            <input type="text"
             onChange={props.handleChange}
             value={props.currentTask}/>
             <button type="submit">Submit List Item</button>
        </form>
    )
}
export default TodoForm;