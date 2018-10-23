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


    // 2. Rendering Form to Edit List : Since my toggleState() method is written in this Component, I will first handle form submit here 
    //    and use onFormSubmitEdit() function and within this handler , I will make a call to another handler function which will update our state
    //    Earlier I did all the functionality in that handler, but got stuck in toggling state...

    onFormSubmitEdit = (task,newValue,event)=>{
        event.preventDefault();

        this.props.handleEditForm(task,newValue);   
        //  After returning we will make a call to toggleState() so that DOM reRenders. 
      
        this.toggleState();

        // A really Nice Project Comes nearly to an End. Learned great Techniques! :) 
        // Playing with REACT is great fun !!! 
        // There however remains one task! If the User adds exactly the same name in the List, we must stop the User!
        // WE WILL HAVE TO MAKE USE OF Life Cycle method for that I guess. shouldComponentUpdate(), That's what is coming to my mind right now...Let's see that soon :IA
    }

    renderForm = ()=>{
        const {task} = this.props;
        return(
        <form onSubmit={(event)=>this.onFormSubmitEdit(task,this.input.value,event)}> {/*Making use of ref*/}
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