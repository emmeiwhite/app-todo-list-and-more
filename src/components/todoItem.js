import React, { Component } from 'react';
import * as p from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            isEditing:false
        }
    }

    // 1. Rendering List function 

    renderList = ()=>{
        // We are returning JSX
        return (
            <div className="todoItemDiv">
               <li 
                className={this.props.task.completed ?'completed list-group-item col-md-10':'list-group-item col-md-10'}
                onClick={()=>this.props.handleClick(this.props.task)}> {this.props.task.name}
                </li>
    
                <button className="col-md-1 btn btn-default btn-lg btn-rounded "onClick={()=>this.props.handleDelete(this.props.task)}>Delete</button>
                {/* Now Editing the list !  */}
                <button className="col-md-1 btn btn-default btn-lg btn-rounded "onClick={()=>this.toggleState()}>Edit Item</button>
            </div>
        )
    }


    // 2. Rendering Form to Edit List

    renderForm = ()=>{
        return(
        <form onSubmit={(event)=>this.props.handleEditForm(this.input.value,event)}> {/*Making use of ref*/}
            <div className="form-group col-md-10">
                <input type="text" 
                ref={
                    (value)=>{
                        this.input = value
                    }
                }
                defaultValue={this.props.task.name} 
                className="form-control " />
            </div>

            <div className="form-group col-md-2">
                 <button type="submit" className="form-control  btn btn-warning ">Submit Edited Value</button>
            </div>
           
        </form> 
        )
    }

    // 3. toggling state

    toggleState = ()=>{
        const {isEditing} = this.state;

        this.setState({
            isEditing:!isEditing
        })
    }

    // 4. submitting form to update the state

    
    render(){
        const {isEditing} = this.state; // Destructuring
        return  (
            <section>
            {
                isEditing ? this.renderForm() : this.renderList()
            }
            </section>
          
            );
    }
  
    
}

TodoItem.propTypes = {
    task:p.object,
    handleClick:p.func
}

export default TodoItem;