import React from 'react';

const TodoForm = (props)=>{
    return(
        <div className="formDiv">
            <form className="form-inline" onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <input type="text"
                    onChange={props.handleChange}
                    value={props.currentTask}
                    id="item" className="form-control"
                    placeholder="Add List"/>    
                </div>
                
                <button type="submit" className="btn btn-default">Submit List Item</button>
             </form>
        </div>
        
    )
}
export default TodoForm;