import React, { Component } from 'react';

import {Hello} from './components/Hello';
import World from './components/World';

import './App.css';

// The Parent Component - App Component : It will contain all other components
class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        <World />
      </div>
    );
  }
}

export default App;
