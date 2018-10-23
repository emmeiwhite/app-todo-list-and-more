import React, { Component } from 'react';

import TodoItem from './todoItem';
import TodoForm from './todoform';

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
           lists:[
               {id:1,name:'Buy Flour',completed:false},
               {id:2,name:'Buy Milk',completed:false},
               {id:3,name:'Buy Cheese',completed:false},
               {id:4,name:'Buy Carrots',completed:false},
           ],
           currentTask:''
        }
    }
     
    // 1.ClickHandler
    onClickHandle = (list)=>{

        const copiedList = [...this.state.lists];

        console.log(copiedList);

        // Let's find index of current list being passed to the handler
        const index = copiedList.indexOf(list);
        console.log(index);

        copiedList[index].completed=true; // this click handle is just to dynamically set the CSS of li
        // Note: Throughout we are only working with the copied array, because we must not modify the state directly
        this.setState({
            lists:copiedList
        })
    }

    // 2. ChangeHandler

    onChangeHandler = (newValue)=>{
        
        this.setState({
            currentTask:newValue.target.value
        })
    }

    // 3. Form SubmitHandler

    onFormSubmit = (e)=>{
        e.preventDefault(); // prevent Default is a fucntion to prevent submittion of form
       

    //    // A check whether user has typed some value or not - Really Really Important    
       if(this.state.currentTask ===''){
           return null; // simply not return anything
       }
       const newlists = [...this.state.lists];
    

       newlists.push({
           id:Math.floor(Math.random()*10000),
           name:this.state.currentTask,
           completed:false
       })

       this.setState({
           lists:newlists,
           currentTask:''
       })
    }

    // 4. Deleting the list 
    
    onDeleteClickHandle = (list)=>{
        
        const copiedList = [...this.state.lists]; // For Immutability we must copy the state field

        //  ====  Code to Delete the particular list  === //
        const newList = copiedList.filter(l=>l!==list);
        
        this.setState({
            lists:newList
        })
    }


    // 

    render() { 
        return ( 
            <section>
                <h1 className="header">A SIMPLE DAY TO DAY TODO_APP</h1>
                <TodoForm  
                    currentTask={this.state.currentTask}
                    handleChange = {(event)=>this.onChangeHandler(event)}
                    handleSubmit = {(e)=>this.onFormSubmit(e)}
                />
                
                <ul className="list-group">
                {
                    this.state.lists.map((list)=>{
                        return  <TodoItem 
                                    task={list} 
                                    key={list.id}
                                    handleClick = {(list)=>this.onClickHandle(list)}
                                    handleDelete = {(list)=>this.onDeleteClickHandle(list)}
                                    
                                />;
                    })
                }
                
                </ul>
            </section>
           
         
        );
    }
}
 
export default TodoList; // Named export 