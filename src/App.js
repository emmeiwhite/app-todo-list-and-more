import React, { Component } from 'react';

import TodoList from './components/todolist';

import './App.css';

// The Parent Component - App Component : It will contain all other components
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
